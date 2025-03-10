import {ConfigOptions} from './configOptions'
import {getPlugins} from './getPlugins'
import {getResolvers} from './getResolvers'
import {getLoaders} from './getLoaders'
import {Configuration} from 'webpack'
import {getDevServer} from './getDevServer'

export function getWebpackConfig(options: ConfigOptions): Configuration {
  const {paths, mode, isDev} = options
  return {
    mode,
    entry: paths.entryPath,
    devtool: isDev ? 'inline-source-map': undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.distPath,
      clean: true
    },
    plugins: getPlugins(paths),
    resolve: getResolvers(),
    devServer: getDevServer(options),
    module: {
      rules: getLoaders()
    },
  }
}
