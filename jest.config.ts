import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.ts'],
  testMatch: [
    '**/+(*.)+(jest-spec).ts'
  ],

  // This block needed just b/c the tsconfig isn't named "tsconfig.spec.json"
  transform: {
    '^.+\\.(ts|js|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.jest-spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true,
      },
    ],
  },

  moduleNameMapper: {
    // Fixup all the packages that don't have correct node ESM packaging
    // Easiest to just use CJS when ESM info is missing in package.json
    // CJS can be imported from ESM, just not the other way around, so this handles transitive dependencies.
    "rxjs": '<rootDir>/node_modules/rxjs/dist/cjs/index.js',
    "rxjs/operators": '<rootDir>/node_modules/rxjs/dist/cjs/operators/index.js',

    tslib: 'tslib/tslib.es6.mjs',
  }
};

export default jestConfig;
