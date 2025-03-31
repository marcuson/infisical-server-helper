import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { registerFormat } from 'archiver';
import archiverZipEncrypted from 'archiver-zip-encrypted';
import helmet from 'helmet';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { appConfig } from './app.config';
import { AppModule } from './app.module';
import { getAppVersion } from './utils/package-json.utils';

registerFormat('zip-encrypted', archiverZipEncrypted);

async function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Infisical Server Helper (ISH)')
    .setDescription('OpenAPI JSON spec available <a href="/api-json">here</a>.')
    .setVersion(getAppVersion())
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function setupLogger(app: INestApplication) {
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
}

export async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  if (appConfig.props.swaggerEnabled) {
    setupSwagger(app);
  }
  setupLogger(app);

  app.enableShutdownHooks();

  app.use(
    helmet({
      strictTransportSecurity: {
        maxAge: 15552000,
      },
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [`'self'`],
          objectSrc: [`'none'`],
          styleSrc: [`'self'`],
          imgSrc: [`'self'`],
          mediaSrc: [`'self'`],
          frameSrc: [`'self'`],
          fontSrc: [`'self'`],
          connectSrc: [`'self'`],
          baseUri: [`'self'`],
          workerSrc: [`'self'`],
          childSrc: [`'self'`],
          frameAncestors: [`'self'`],
          formAction: [`'self'`],
          manifestSrc: [`'self'`],
          upgradeInsecureRequests: [],
        },
      },
    }),
  );

  app.enableCors();

  await app.listen(appConfig.props.port, appConfig.props.ipBind);
}
