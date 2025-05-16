import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function getCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[local]_[hash:base64:4]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
