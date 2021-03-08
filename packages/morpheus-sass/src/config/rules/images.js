const { exclude } = require('../config');

module.exports = {
  test: /\.(ttf|woff|woff2|otf|png|svg|jpg|eot)$/,
  use: [
    'url-loader',
    {
      loader: 'img-loader',
      options: {
        limit: 10000,
        enabled: true,
        gifsicle: {
          interlaced: false,
        },
        mozjpeg: {
          progressive: true,
          arithmetic: false,
        },
        optipng: false,
        pngquant: {
          floyd: 0.5,
          speed: 2,
        },
        svgo: {
          plugins: [
            {
              removeTitle: true,
            },
            {
              convertPathData: false,
            },
          ],
        },
      },
    },
  ],
  exclude,
};
