import {ConfigOptions} from './configOptions/configOptions'
import path from 'path'
import {getPlugins} from './getPlugins'
import {getResolvers} from './getResolvers'
import {getLoaders} from './getLoaders'
import {Configuration} from 'webpack'

export function getWebpackConfig(options: ConfigOptions): Configuration {
  const {paths, mode} = options
  return {
    mode,
    entry: paths.entryPath,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.distPath,
      clean: true
    },
    plugins: getPlugins(paths),
    resolve: getResolvers(),
    module: {
      rules: getLoaders()
    },
  }
}
