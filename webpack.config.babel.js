import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const version = '0.1.2';

const { NODE_ENV = 'production', LIBRARY_TARGET = 'commonjs' } = process.env;
let isEnvProduction = NODE_ENV !== 'development';
if (LIBRARY_TARGET === 'umd') isEnvProduction = true;

let localIdentName = '[name]--[local]---[hash:base64:5]';
if (LIBRARY_TARGET === 'cssonly') {
  localIdentName = '[name]-[local]';
  isEnvProduction = true;
}

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const base = {
  context: __dirname,
  entry: {
    titan: './src/titan/index.js',
  },
  /* resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles/'),
    },
  },
  */
  output: {
    path: path.join(__dirname, `titan/${LIBRARY_TARGET}`),
    libraryTarget: LIBRARY_TARGET === 'cssonly' ? 'commonjs' : LIBRARY_TARGET,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          customize: require.resolve('babel-preset-react-app/webpack-overrides'),
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                  },
                },
              },
            ],
          ],
          cacheDirectory: true,
          cacheCompression: isEnvProduction,
          compact: isEnvProduction,
        },
      },
      {
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
      },
      {
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
      },
      {
        loader: 'file-loader',
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.(sa|sc|c)ss$/],
        options: {
          name: 'static/media/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
      DEBUG: false,
      VERSION: `v${version}-${process.env.NODE_ENV}-${Date.now()}`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    usedExports: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        backgroundStyles: {
          name: 'titan',
          test: (m, c, entry = 'titan') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
};

module.exports = base;
