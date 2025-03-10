import webpack from 'webpack'
import {getWebpackConfig} from './config/build/getWebpackConfig'
import {ConfigPaths} from './config/build/configOptions/configOptions'
import path from 'path'

const paths: ConfigPaths = {
  entryPath: path.resolve(__dirname, 'src', 'index.ts'),
  distPath: path.resolve(__dirname, 'dist'),
  htmlPath: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'

const isDev = mode === 'development'

const config: webpack.Configuration = getWebpackConfig({
  mode: 'development',
  paths,
  isDev
});

export default config
