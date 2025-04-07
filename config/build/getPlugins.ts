import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import {ConfigOptions} from './configOptions'

export function getPlugins(options: ConfigOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({template: options.paths.htmlPath}),
    new webpack.ProgressPlugin(),
    !options.isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: options.isDev,
    }),
  ]
  if (options.isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  plugins.push(new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }))

  return plugins.filter(Boolean)
}
