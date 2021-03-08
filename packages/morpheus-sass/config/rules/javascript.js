const { exclude } = require('../config');

module.exports = {
  test: /\.js(x)$/,
  use: [
    {
      loader: 'babel-loader',
    },
  ],
  exclude,
};
