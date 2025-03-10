import {ResolveOptions} from 'webpack'

export function getResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // files without extensions
  }
}
