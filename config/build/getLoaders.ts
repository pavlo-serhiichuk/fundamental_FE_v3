import {type ConfigOptions} from './configOptions'
import {getCssLoader} from './loaders/getCssLoader'
import {getSvgLoader} from './loaders/getSvgLoader'

export const getLoaders = (options: ConfigOptions) => {
  const {isDev} = options
  const svgLoader = getSvgLoader()
  const cssLoader = getCssLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    cssLoader,
    fontLoader
  ]
}
