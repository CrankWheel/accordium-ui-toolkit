const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
        },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sourceMapContents: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  });

  config.plugins.push(new MiniCssExtractPlugin());

  // Return the altered config
  return config;
};
