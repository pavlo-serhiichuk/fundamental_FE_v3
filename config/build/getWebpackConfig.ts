import {Configuration} from 'webpack'
import {ConfigOptions} from './configOptions'
import {getPlugins} from './getPlugins'
import {getResolvers} from './getResolvers'
import {getLoaders} from './getLoaders'
import {getDevServer} from './getDevServer'

export function getWebpackConfig(options: ConfigOptions): Configuration {
  const {paths, mode, isDev} = options
  return {
    mode,
    entry: paths.entryPath,
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.buildPath,
      clean: true,
      publicPath: '/',
    },
    plugins: getPlugins(options),
    resolve: getResolvers(options),
    devServer: getDevServer(options),
    module: {
      rules: getLoaders(options),
    },
  }
}
