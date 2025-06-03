import path from 'path'
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const config = {
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setupTests.ts'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.s?css$': path.resolve(__dirname, 'styleMock.ts'),
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.jpg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.png': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    axios: 'axios/dist/node/axios.cjs',
    '^@/(.*)$': '<rootDir>src/$1',
  },
  modulePaths: ['<rootDir>src'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        // openReport: true,
      },
    ],
  ],
}

export default config
