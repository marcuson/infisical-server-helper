import { MutablePartOf } from '../utils/type.utils';

export class AppConfigProps {
  apiEnabled: boolean;
  backupMaxNum: number;
  backupPassword: string;
  dataDir: string;
  ipBind: string;
  infisicalClientId: string;
  infisicalClientSecret: string;
  infisicalServerUrl: string;
  nodeEnv: string;
  pinoLevel: string | undefined;
  pinoShouldPrettifyLogger: boolean;
  port: number;
  scheduleEnabled: boolean;
  scheduleBackupCron: string | undefined;
  scheduleBackupWorkspaceIds: string[] | undefined;
  swaggerEnabled: boolean;
}

export type AppConfigMutablePart = MutablePartOf<AppConfigProps>;
export type AppConfigMutableKey = keyof AppConfigMutablePart;
