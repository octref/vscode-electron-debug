const webpack = require('webpack')

module.exports = {
  entry: './renderer.js',
  output: {
    path: './dist',
    publicPath: '/dev-dist',
    filename: 'renderer.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval-source-map'
}
