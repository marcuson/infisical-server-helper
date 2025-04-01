import { appConfig } from './app.config';

describe('AppConfig', () => {
  const envFilePaths = ['test/app-config.test.env'];
  const cfg = appConfig;

  describe('env files loading', () => {
    it('should be undefined some property of env before dotenv load', () => {
      expect(process.env.PORT).toBeUndefined();
    });

    it('should be defined some property of env after dotenv load', () => {
      appConfig.loadEnvFiles(envFilePaths);
      expect(process.env.PORT).toEqual('3000');
    });

    it('should log env file not found', () => {
      const logWarn = jest.spyOn((appConfig as any).logger, 'info');
      appConfig.loadEnvFiles(['./not-existent.env']);
      expect(logWarn).toHaveBeenCalled();
    });

    it('should expand env var', () => {
      appConfig.loadEnvFiles(envFilePaths);
      expect(process.env.EXPAND_ENV).toBe('outer-inner-');
    });
  });

  describe('env validation and actualization', () => {
    it('should be defined all properties of appConfig after loading dotenv file', () => {
      appConfig.loadEnvFiles(envFilePaths);
      appConfig.actualizeFromEnv();

      expect(cfg.props.infisicalClientId).toBeDefined();
      expect(cfg.props.infisicalClientSecret).toBeDefined();
      expect(cfg.props.ipBind).toBeDefined();
      expect(cfg.props.nodeEnv).toBeDefined();
      expect(cfg.props.pinoLevel).toBeDefined();
      expect(cfg.props.pinoShouldPrettifyLogger).toBeDefined();
      expect(cfg.props.port).toBeDefined();
      expect(cfg.props.swaggerEnabled).toBeDefined();
    });

    it('should be valorized property "scheduleBackupWorkspaceIds" of appConfig after loading dotenv file', () => {
      appConfig.loadEnvFiles(envFilePaths);
      appConfig.actualizeFromEnv();

      expect(cfg.props.scheduleBackupWorkspaceIds).toBeDefined();
      expect(cfg.props.scheduleBackupWorkspaceIds).toEqual([
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy',
      ]);
    });
  });
});
