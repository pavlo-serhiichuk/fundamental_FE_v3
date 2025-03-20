import ReactRefreshTypeScript from 'react-refresh-typescript'
import {type ConfigOptions} from './configOptions'
import {getCssLoader} from './loaders/getCssLoader'
import {getSvgLoader} from './loaders/getSvgLoader'
import {getBabelLoader} from './loaders/getBabelLoader'

export const getLoaders = (options: ConfigOptions) => {
  const {isDev} = options
  const svgLoader = getSvgLoader()
  const cssLoader = getCssLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = getBabelLoader(options)

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: isDev ? [ReactRefreshTypeScript()] : [],
          }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  }

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader,
    fontLoader,
  ]
}
