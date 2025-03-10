import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack, {WebpackPluginInstance} from 'webpack'
import {ConfigPaths} from './configOptions'

export function getPlugins(paths: ConfigPaths): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template:  paths.htmlPath}),
    new webpack.ProgressPlugin()
  ]
}
