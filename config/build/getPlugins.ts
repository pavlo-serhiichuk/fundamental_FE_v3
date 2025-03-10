import HTMLWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack, {WebpackPluginInstance} from 'webpack'
import {ConfigOptions, ConfigPaths} from './configOptions/configOptions'

export function getPlugins(paths: ConfigPaths): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template:  paths.htmlPath}),
    new webpack.ProgressPlugin()
  ]
}
