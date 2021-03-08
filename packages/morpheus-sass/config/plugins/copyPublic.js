const CopyWebpackPlugin = require('copy-webpack-plugin');

const { publicPath, dist } = require('../config');

module.exports = new CopyWebpackPlugin({
  patterns: [
    {
      context: publicPath,
      from: './',
      to: dist,
    },
  ],
});
