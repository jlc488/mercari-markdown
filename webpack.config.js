const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDirectory = 'dist'

module.exports = {
  entry: ['@babel/polyfill', './src/client/index.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://server:8080'
      }
    },
    watchOptions: {
      poll: true
    }
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000
    // }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}