import { Injectable, Logger } from '@nestjs/common';
import { add, compareDesc, sub } from 'date-fns';
import { ArrayElement } from 'src/utils/type.utils';
import { appConfig } from '../../app.config';
import { Configuration, DefaultApi } from './generated';

type ApiTypeExtract<MethodName extends keyof DefaultApi> = Awaited<
  ReturnType<DefaultApi[MethodName]>
>['data'];

export type GetAllSecretsFromWorkspaceAndEnvReturn = {
  path: string;
  secrets: {
    name: string;
    value: string;
  }[];
}[];

@Injectable()
export class InfisicalService {
  private logger = new Logger(InfisicalService.name);

  private apiClient: DefaultApi;
  private lastToken: ApiTypeExtract<'apiV1AuthUniversalAuthLoginPost'>;
  private lastTokenExpiration = sub(Date.now(), { years: 1 });

  constructor() {
    const apiConfig = new Configuration({
      basePath: appConfig.props.infisicalServerUrl,
      accessToken: async () => {
        if (
          compareDesc(
            this.lastTokenExpiration,
            sub(Date.now(), { seconds: 15 }),
          ) <= 0
        ) {
          return this.lastToken.accessToken;
        }

        this.lastToken = await this.login();
        this.lastTokenExpiration = add(Date.now(), {
          seconds: this.lastToken.expiresIn,
        });
        return this.lastToken.accessToken;
      },
    });
    this.apiClient = new DefaultApi(apiConfig);
  }

  private async login(): Promise<
    ApiTypeExtract<'apiV1AuthUniversalAuthLoginPost'>
  > {
    this.logger.debug(`Request new access token`);

    const reqBody = {
      clientId: appConfig.props.infisicalClientId,
      clientSecret: appConfig.props.infisicalClientSecret,
    };
    const res = await this.apiClient.apiV1AuthUniversalAuthLoginPost(reqBody);
    return res.data;
  }

  async getWorkspaceInfo(opts: {
    workspaceId: string;
  }): Promise<ApiTypeExtract<'apiV1WorkspaceWorkspaceIdGet'>['workspace']> {
    this.logger.debug(
      `Get all envs in workspace with id '${opts.workspaceId}'.`,
    );

    const res = await this.apiClient.apiV1WorkspaceWorkspaceIdGet(
      opts.workspaceId,
    );
    return res.data.workspace;
  }

  async getAllSecretsFromWorkspaceAndEnv(opts: {
    workspaceId: string;
    envSlug: string;
  }): Promise<GetAllSecretsFromWorkspaceAndEnvReturn> {
    this.logger.debug(
      `Get all secrets of project with id '${opts.workspaceId}', env slug '${opts.envSlug}'.`,
    );

    const res = await this.apiClient.apiV3SecretsRawGet(
      undefined,
      opts.workspaceId,
      undefined,
      opts.envSlug,
      '/',
      'true',
      'false',
      'true',
      'false',
      undefined,
    );

    const secretsMap = res.data.secrets.reduce((acc, x) => {
      const path = x.secretPath || '/';
      if (!acc.has(path)) {
        acc.set(path, []);
      }

      acc.get(path)!.push({ name: x.secretKey, value: x.secretValue });

      return acc;
    }, new Map<string, ArrayElement<GetAllSecretsFromWorkspaceAndEnvReturn>['secrets']>());

    const secrets: GetAllSecretsFromWorkspaceAndEnvReturn = Array.from(
      secretsMap.keys(),
    )
      .sort()
      .map((x) => ({
        path: x,
        secrets: secretsMap
          .get(x)!
          .sort((a, b) => a.name.localeCompare(b.name)),
      }));

    return secrets;
  }
}
