const CopyWebpackPlugin = require('copy-webpack-plugin');

const { src, dist } = require('../config');

module.exports = new CopyWebpackPlugin([
  {
    context: src,
    from: './static',
    to: dist,
  },
]);
