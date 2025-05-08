import {ResolveOptions} from 'webpack'
import path from 'path'
import {ConfigOptions} from './configOptions'

export function getResolvers(options: ConfigOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // files without extensions
    preferAbsolute: true,
    modules: [options.paths.srcPath, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.srcPath,
    },
  }
}
