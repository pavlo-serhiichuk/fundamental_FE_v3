import webpack from 'webpack'
import {getWebpackConfig} from './config/build/getWebpackConfig'
import {ConfigEnv, ConfigPaths} from './config/build/configOptions'
import path from 'path'

export default (env: ConfigEnv) => {
  const paths: ConfigPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    buildPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = getWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return config
}
