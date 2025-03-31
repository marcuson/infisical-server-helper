import * as packageJson from '../../package.json';

export function getPackageJson() {
  return packageJson;
}

export function getAppVersion(): string {
  return getPackageJson().version;
}
