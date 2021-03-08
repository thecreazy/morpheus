const CopyWebpackPlugin = require('copy-webpack-plugin');

const { publicPath, dist } = require('../config');

module.exports = new CopyWebpackPlugin([
  {
    context: publicPath,
    from: './',
    to: dist,
  },
]);
