const CleanWebpackPlugin = require('clean-webpack-plugin');

const { dist, root } = require('../config');

module.exports = new CleanWebpackPlugin([dist], {
  root,
  verbose: true,
  dry: false,
});
