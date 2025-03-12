import {RuleSetRule} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {ConfigOptions} from './configOptions'

export function getLoaders(options: ConfigOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  //  const cssLoaders = {
  //     test: /\.s[ac]ss$/i,
  //     use: [
  //       options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: {
  //             auto: /\.module\./, // Enable CSS Modules only for `.module.scss`
  //             localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:6]', // Better class names in dev
  //           },
  //           importLoaders: 1, // Ensures `@import` in SCSS files work correctly
  //           sourceMap: options.isDev,
  //           esModule: true, // ✅ Ensure CSS modules are exported as ES Modules
  //         },
  //       },
  //       'sass-loader',
  //     ],
  //   }

  const cssLoaders = {
    test: /\.s[ac]ss$/, // Apply this rule to all other SCSS files (global styles)
    exclude: /\.module\.s[ac]ss$/, // Exclude module files
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader', // No modules enabled here
      'sass-loader',
    ],
  }

  const cssModuleLoaders = {
    test: /\.module\.s[ac]ss$/, // Only apply CSS Modules to *.module.scss files
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]', // Keeps class names readable in dev
            namedExport: false,
          }
        }
      },
      'sass-loader',
    ],
  }


  return [
    cssLoaders,
    cssModuleLoaders,
    typescriptLoader,
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ]
}
