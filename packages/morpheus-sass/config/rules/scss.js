const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { exclude } = require('../config');

module.exports = {
  test: /\.(scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        import: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {},
    },
  ],
  exclude,
};
