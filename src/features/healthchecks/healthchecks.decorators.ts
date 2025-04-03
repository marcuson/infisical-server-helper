import { HealthchecksService } from './healthchecks.service';

const hc = new HealthchecksService();

export const MeasuredHealthcheck = (opts: {
  enabled: boolean;
  url: string;
}): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    if (!opts.enabled) {
      return;
    }

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      let result;

      await hc.measuredCheck({ url: opts.url }, async () => {
        result = await originalMethod.apply(this, args);
      });

      return result;
    };
  };
};
