import type { Config } from 'jest';

const defaultCfg: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};

const unitCfg: Config = Object.assign({}, defaultCfg, <Config>{
  displayName: 'unit',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/$1',
    '^test/(.*)': '<rootDir>/../test/$1',
  },
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
});

const e2eCfg: Config = Object.assign({}, defaultCfg, <Config>{
  displayName: 'e2e',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
    '^test/(.*)': '<rootDir>/test/$1',
  },
  rootDir: '.',
  testRegex: 'test/e2e/.*\\.e2e-spec\\.ts$',
});

const config: Config = { projects: [unitCfg, e2eCfg] };

export default config;
