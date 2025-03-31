import * as dotenv from 'dotenv';
import { DotenvExpandOptions, expand } from 'dotenv-expand';
import { existsSync, readFileSync } from 'fs';
import Joi, { ObjectSchema } from 'joi';
import { default as pino } from 'pino';
import { AppConfigMutableKey, AppConfigProps } from './config/app-config-props';
import {
  EnvCfgType,
  EnvCfgTypeKey,
  EnvSchemaType,
  EnvType,
  envCfg,
} from './config/env-config';
import { Entries } from './utils/type.utils';

class AppConfig {
  private logger = pino();
  private envValidator: ObjectSchema<EnvType>;
  private _props: AppConfigProps = new AppConfigProps();

  constructor() {
    const entries = Object.entries(envCfg) as Entries<EnvCfgType>;
    const envSchema: EnvSchemaType = entries.reduce((acc, x) => {
      // @ts-expect-error
      acc[x[0]] = x[1].schema;
      return acc;
    }, {} as EnvSchemaType);

    this.envValidator = Joi.object<EnvType>(envSchema);
  }

  get props(): AppConfigProps {
    return this._props;
  }

  loadEnvFiles(envFilePaths: string[]) {
    let config: ReturnType<typeof dotenv.parse> = {};

    for (const envFilePath of envFilePaths) {
      if (!existsSync(envFilePath)) {
        this.logger.info(
          `dotenv file at '${envFilePath}' does not exists, skipping it.`,
        );
        continue;
      }

      const cfg = dotenv.parse(readFileSync(envFilePath));
      config = Object.assign(cfg, config);
      const expandOptions: DotenvExpandOptions = {};

      // The `expand` call also set process.env
      config = expand({ ...expandOptions, parsed: config }).parsed || config;
    }
  }

  actualizeFromEnv() {
    const envProps = this.validateEnv();

    let envVar: EnvCfgTypeKey;
    for (envVar in envCfg) {
      const appConfigProp = envCfg[envVar].propName as AppConfigMutableKey;
      const value = envProps[envVar];
      // @ts-expect-error
      this.props[appConfigProp] = value;
    }
  }

  private validateEnv(): EnvType {
    const objectFromEnv: any = {};

    (Object.entries(envCfg) as Entries<EnvCfgType>).forEach((entry) => {
      const envVar = entry[0];
      const value = process.env[envVar];
      if (value === undefined || value === '') {
        return;
      }

      objectFromEnv[envVar] = value;
    });

    const validationResult = this.envValidator.validate(objectFromEnv, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (validationResult.error) {
      throw new Error(
        `Validation error: ${validationResult.error.details
          .map((e) => e.message)
          .join(', ')}`,
      );
    }

    return validationResult.value;
  }
}

export const appConfig = new AppConfig();
