import { type ConfigOptions } from '../configOptions'

export function getBabelLoader (options: ConfigOptions) {
  const { isDev } = options
  const getPlugins = () => {
    const plugins = [['i18next-extract', {
      locales: ['ua', 'en'],
      keyAsDefaultValue: true
    }]]
    if (isDev) {
      plugins.push([require.resolve('react-refresh/babel')])
    }
    return plugins
  }

  return {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }]
        ],
        plugins: getPlugins()
      }
    }
  }
}
