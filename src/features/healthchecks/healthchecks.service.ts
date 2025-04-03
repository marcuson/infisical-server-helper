import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { join } from 'path';

@Injectable()
export class HealthchecksService {
  private logger = new Logger(HealthchecksService.name);

  private ax = axios.create();

  constructor() {
    this.ax.interceptors.response.use(
      (r) => r,
      (e) => {
        this.logger.error(e);
        return Promise.reject(
          new Error('Axios error encountered during HC call'),
        );
      },
    );
  }

  private async callCheckUrl(opts: { url: string }): Promise<void> {
    await this.ax.get(opts.url);
  }

  private getStartUrl(url: string): string {
    const u = new URL(url);
    u.pathname = join(u.pathname, '/start');
    return u.toString();
  }

  private getFailUrl(url: string): string {
    const u = new URL(url);
    u.pathname = join(u.pathname, '/fail');
    return u.toString();
  }

  async measuredCheck(
    opts: { url: string },
    fn: () => Promise<void>,
  ): Promise<void> {
    this.logger.debug(`Start new measured Healtchcheck`);

    this.logger.debug(`Sending start check to ${opts.url}`);
    await this.callCheckUrl({ url: this.getStartUrl(opts.url) });

    try {
      await fn();
    } catch (e) {
      this.logger.debug(`Sending fail check to ${opts.url}`);
      await this.callCheckUrl({ url: this.getFailUrl(opts.url) });
      throw e;
    }

    this.logger.debug(`Sending end check to ${opts.url}`);
    await this.callCheckUrl(opts);
  }
}
