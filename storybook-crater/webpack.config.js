const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDevelopment = true;
const isEnvProduction = !isDevelopment;
const localIdentName = '[name]--[local]---[hash:base64:5]';

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules.push({
    test: /\.module\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
      !isEnvProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: { localIdentName },
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            // eslint-disable-next-line global-require
            require('postcss-import'),
            // eslint-disable-next-line global-require
            require('postcss-preset-env')({ preserve: false }),
            // eslint-disable-next-line global-require
            require('autoprefixer')({}),
            // eslint-disable-next-line global-require
            require('postcss-custom-media'),
            // eslint-disable-next-line global-require
            require('postcss-color-mod-function'),
            // eslint-disable-next-line global-require
            require('postcss-calc'),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !isEnvProduction,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: [/node_modules/, /\.module\.(sa|sc|c)ss$/],
    use: [
      !isEnvProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !isEnvProduction,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },);

  config.plugins.push(new MiniCssExtractPlugin());

  // Return the altered config
  return config;
};
