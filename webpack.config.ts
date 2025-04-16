import webpack from 'webpack'
import path from 'path'
import {getWebpackConfig} from './config/build/getWebpackConfig'
import {ConfigEnv, ConfigPaths} from './config/build/configOptions'

export default (env: ConfigEnv) => {
  const paths: ConfigPaths = {
    entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
    buildPath: path.resolve(__dirname, 'build'),
    htmlPath: path.resolve(__dirname, 'public', 'index.html'),
    srcPath: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'
  const project = 'frontend'
  const config: webpack.Configuration = getWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project,
  })

  return config
}
