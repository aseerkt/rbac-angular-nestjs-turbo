module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: false,
  collectCoverageFrom: [
    './src/app/features/**/*.{component,service}.ts',
    './src/app/common/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
