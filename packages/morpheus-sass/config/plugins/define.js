const webpack = require('webpack');

module.exports = new webpack.DefinePlugin({
  'process.env.NODE_ENV': process.env.production
    ? JSON.stringify('production')
    : JSON.stringify('development'),
  'process.env.CDNURL': process.env.CDNURL ? process.env.CDNURL : null,
});
