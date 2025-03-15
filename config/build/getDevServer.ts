import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {ConfigOptions} from './configOptions'

export function getDevServer(options: ConfigOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
