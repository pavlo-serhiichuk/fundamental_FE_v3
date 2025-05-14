import {type ConfigOptions} from '../configOptions'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface GetBabelLoaderOptions extends ConfigOptions {
  isTsx?: boolean
}

export function getBabelLoader(options: GetBabelLoaderOptions) {
  const {isDev, isTsx} = options

  const plugins = [
    [
      'i18next-extract',
      {
        locales: ['ua', 'en'],
        keyAsDefaultValue: true,
      },
    ], [
      '@babel/plugin-transform-typescript',
      {
        isTsx,
      },
    ],
    '@babel/plugin-transform-runtime',
    isTsx && [
      babelRemovePropsPlugin,
      {props: ['data-testid']},
    ],
    isDev && [require.resolve('react-refresh/babel')],
  ].filter(Boolean)

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {targets: 'defaults'}],
        ],
        plugins,
      },
    },
  }
}
