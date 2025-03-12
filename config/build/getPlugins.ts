import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import {ConfigPaths} from './configOptions'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function getPlugins(paths: ConfigPaths): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template:  paths.htmlPath}),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css'
      // chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}
