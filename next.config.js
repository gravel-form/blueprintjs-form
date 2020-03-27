/* eslint-disable */
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  ...withCss(
    withLess({
      env: {
        BACKEND_URL: isProduction ? '/blueprintjs-form' : '',
      },
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      assetPrefix: isProduction ? '/blueprintjs-form' : '',
    })
  ),
};
