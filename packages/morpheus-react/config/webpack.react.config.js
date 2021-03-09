const Config = require('webpack-config').default;

const { src, dist } = require('./config');

const javascript = require('./rules/javascript');
const typescript = require('./rules/typescript');
const images = require('./rules/images');
const scss = require('./rules/scss');
const css = require('./rules/css');

const definePlugin = require('./plugins/define');
const copyPublicPlugin = require('./plugins/copyPublic');
const cssPlugin = require('./plugins/css');
const bundleAnalyzerPlugin = require('./plugins/bundleAnalyzer');

const javascriptOptimize = require('./optimization/javascript');
const cssOptimize = require('./optimization/css');

module.exports = new Config().merge({
  context: src,
  mode: 'production',
  entry: {
    main: './index.ts',
  },
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.scss', '.css', '.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [typescript, javascript, images, scss, css],
  },
  plugins: [
    definePlugin,
    copyPublicPlugin,
    cssPlugin,
    ...(process.env.analyzing ? [bundleAnalyzerPlugin] : []),
  ],
  devtool: 'source-map',
  optimization: {
    minimizer: [javascriptOptimize, cssOptimize],
  },
});
