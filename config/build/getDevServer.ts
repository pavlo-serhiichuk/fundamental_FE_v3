import {ConfigOptions} from './configOptions'
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
export function getDevServer(options: ConfigOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}
