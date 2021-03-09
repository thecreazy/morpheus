const { exclude } = require('../config');

module.exports = {
  test: /\.ts(x)$/,
  use: [
    {
      loader: 'ts-loader',
    },
  ],
  exclude,
};
