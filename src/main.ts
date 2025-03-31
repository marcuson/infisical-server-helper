// load app config from env files first (if present)...
import { appConfig } from './app.config';

const envFilePaths = ['.env'];
appConfig.loadEnvFiles(envFilePaths);
appConfig.actualizeFromEnv();

// ...then import the app bootstrapper. It is important to import it *after* the env files have
// been loaded for proper functioning
import { bootstrap } from './app.bootstrap';

if (!process.env.TZ) {
  process.env.TZ = 'Etc/UTC';
}

bootstrap();
