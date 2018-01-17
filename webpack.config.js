const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './App.jsx',
    vendor: ['react'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /static\/images\/\.(png)$/,
        loader: 'url-loader?name=/static/images/$1',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
    new HtmlWebpackPlugin({
      title: 'LunchWatch',
      template: 'index.html',
      filename: 'index.html',
      minify: false,
    }),
  ],
  devServer: {
    contentBase: './src',
  },
  devtool: 'source-map',
  watchOptions: {
    poll: 1000,
  },
};
