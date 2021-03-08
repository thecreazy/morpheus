const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = new HtmlWebpackPlugin({
  inject: true,
  template: resolve(__dirname, '../../public/index.html'),
  minify: {
    removeComments: process.env.production,
    collapseWhitespace: process.env.production,
    removeRedundantAttributes: process.env.production,
    useShortDoctype: process.env.production,
    removeEmptyAttributes: process.env.production,
    removeStyleLinkTypeAttributes: process.env.production,
    keepClosingSlash: process.env.production,
    minifyJS: process.env.production,
    minifyCSS: process.env.production,
    minifyURLs: process.env.production,
  },
});
