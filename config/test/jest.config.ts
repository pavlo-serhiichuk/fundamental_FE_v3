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
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setupTests.ts'],
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.s?css$': path.resolve(__dirname, 'styleMock.ts'),
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    axios: 'axios/dist/node/axios.cjs',
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

export default config
