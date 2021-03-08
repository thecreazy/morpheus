const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { exclude } = require('../config');

module.exports = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
  exclude,
};
