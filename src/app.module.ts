import {
  DynamicModule,
  ForwardReference,
  Logger,
  Module,
  Type,
} from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from 'nestjs-pino';
import { appConfig } from './app.config';
import { BackupModule } from './features/backup/backup.module';
import { InfisicalModule } from './features/infisical/infisical.module';
import { VersionModule } from './features/version/version.module';
import { HomeController } from './home.controller';

type ModuleDef =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>;

const imports: (ModuleDef | undefined)[] = [
  LoggerModule.forRoot({
    pinoHttp: {
      level: appConfig.props.pinoLevel || 'info',
      transport: appConfig.props.pinoShouldPrettifyLogger
        ? {
            target: 'pino-pretty',
            options: { singleLine: true },
          }
        : undefined,
    },
    exclude: ['/healthcheck'],
  }),
  InfisicalModule,
  BackupModule,
  ScheduleModule.forRoot(),
  VersionModule,
];

const filteredImports: ModuleDef[] = imports.filter((x) => !!x) as ModuleDef[];

@Module({
  imports: filteredImports,
  controllers: [HomeController],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  constructor() {}
}
