import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {ConfigOptions} from './configOptions'

export function getPlugins(options: ConfigOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({template: options.paths.htmlPath}),
    new webpack.ProgressPlugin(),
    !options.isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
    options.isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean)
}
