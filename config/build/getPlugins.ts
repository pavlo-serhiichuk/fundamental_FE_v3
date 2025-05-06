import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {ConfigOptions} from './configOptions'

const CopyPlugin = require('copy-webpack-plugin')

export function getPlugins(options: ConfigOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({template: options.paths.htmlPath}),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev,
      __API__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project),
    }),
    new CopyPlugin({
      patterns: [
        {from: options.paths.locales, to: options.paths.buildLocales},
      ],
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ]

  if (options.isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
  }

  if (!options.isDev) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }))
  }

  return plugins.filter(Boolean)
}
