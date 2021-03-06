const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
      title: 'NLP News App',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: 'index.html',
      cleanupOutdatedCaches: true,
    }),
  ],
}
