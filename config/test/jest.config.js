/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const path = require('path')
/** @type {import('jest').Config} */
const config = {
  globals: {
    __IS_DEV__: true,
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>config/test/setupTests.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.s?css$': path.resolve(__dirname, 'styleMock.ts'),
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  modulePaths: [
    '<rootDir>src',
  ],
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
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
}

module.exports = config
