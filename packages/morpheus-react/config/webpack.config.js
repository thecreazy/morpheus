require('dotenv').config();

const config = require('webpack-config');

const { environment } = config;

environment.setAll({
  env: () => process.env.NODE_ENV,
});

const Config = config.default;

module.exports = new Config().extend('config/webpack.react.config.js');
