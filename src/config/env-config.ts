import OriginalJoi, { Schema } from 'joi';
import { AppConfigMutableKey, AppConfigMutablePart } from './app-config-props';

type JoiType = typeof OriginalJoi & {
  commaSeparatedList(): OriginalJoi.ArraySchema<string>;
};

const Joi: JoiType = OriginalJoi.extend((joi) => ({
  base: joi.array<string[]>(),
  coerce(val, helpers) {
    return { value: val.split ? val.split(',') : val };
  },
  type: 'commaSeparatedList',
}));

type CfgInfo<TSchema> = {
  propName: keyof AppConfigMutablePart;
  schema: Schema<TSchema>;
};

function cfg<TSchema>(
  propName: AppConfigMutableKey,
  schema: Schema<TSchema>,
): CfgInfo<TSchema> {
  return {
    propName,
    schema,
  };
}

// Env config is here
export const envCfg = {
  API_ENABLED: cfg('apiEnabled', Joi.bool().optional().default(true)),
  BACKUP_MAX_NUM: cfg(
    'backupMaxNum',
    Joi.number().optional().default(30).prefs({
      convert: true,
    }),
  ),
  BACKUP_PASSWORD: cfg('backupPassword', Joi.string().required()),
  DATA_DIR: cfg('dataDir', Joi.string().optional().default('/ish/data')),
  IP_BIND: cfg('ipBind', Joi.string().optional().ip().default('0.0.0.0')),
  INFISICAL_CLIENTID: cfg('infisicalClientId', Joi.string().required()),
  INFISICAL_CLIENTSECRET: cfg('infisicalClientSecret', Joi.string().required()),
  INFISICAL_SERVER_URL: cfg(
    'infisicalServerUrl',
    Joi.string().uri().optional().default('https://app.infisical.com'),
  ),
  LOG_LEVEL: cfg(
    'pinoLevel',
    Joi.string()
      .allow('trace', 'debug', 'info', 'warn', 'error')
      .optional()
      .default('info'),
  ),
  LOG_PRETTIFY: cfg(
    'pinoShouldPrettifyLogger',
    Joi.bool().optional().default(true),
  ),
  NODE_ENV: cfg('nodeEnv', Joi.string().optional().default('production')),
  PORT: cfg(
    'port',
    Joi.number().optional().default(3000).prefs({
      convert: true,
    }),
  ),
  SCHEDULE_ENABLED: cfg(
    'scheduleEnabled',
    Joi.bool().optional().default(false),
  ),
  SCHEDULE_BACKUP_CRON: cfg(
    'scheduleBackupCron',
    Joi.string().optional().default('0 0 * * *'),
  ),
  SCHEDULE_BACKUP_WORKSPACE_IDS: cfg(
    'scheduleBackupWorkspaceIds',
    Joi.commaSeparatedList().optional().prefs({ convert: true }),
  ),
  SWAGGER_ENABLED: cfg('swaggerEnabled', Joi.bool().optional().default(false)),
};

export type EnvCfgType = typeof envCfg;
export type EnvCfgTypeKey = keyof EnvCfgType;

export type EnvSchemaType = {
  [k in keyof EnvCfgType]: EnvCfgType[k]['schema'];
};
export type EnvType = { [key in EnvCfgTypeKey]: any };
