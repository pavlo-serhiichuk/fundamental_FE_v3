import {Configuration, DefinePlugin} from 'webpack'
import {ConfigPaths} from '../build/configOptions'
import {getCssLoader} from '../build/loaders/getCssLoader'

const config = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    'storybook-css-modules',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: async (config: Configuration) => {
    const paths: ConfigPaths = {
      buildPath: '',
      htmlPath: '',
      entryPath: '',
      srcPath: '../../src',
    }
    config.resolve?.modules?.push(paths.srcPath, 'node_modules')
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(getCssLoader(true))
    // Find and remove the existing rule for handling SVGs
    // @ts-ignore
    const fileLoaderRule: any = config.module?.rules?.find((rule: any) => {
      if (rule.test) {
        return rule.test?.test('.svg')
      }
      return null
    })
    fileLoaderRule.exclude = /\.svg$/

    // Add new rule for handling SVGs with @svgr/webpack
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.plugins?.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://test-api.ua'),
      __PROJECT__: JSON.stringify('storybook'),
    }))

    config.plugins?.push(
      new DefinePlugin({
      }),
    )

    return config
  },
}
export default config
