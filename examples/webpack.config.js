/* eslint-env node */

const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    playground: path.resolve(__dirname, './playground/src/index.js'),
    refs: path.resolve(__dirname, './refs/src/index.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      'formsy-react-components': path.resolve(__dirname, '../src/main'),
    },
  },
};
