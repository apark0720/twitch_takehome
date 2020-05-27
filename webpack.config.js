const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const makeHTML = new HtmlWebpackPlugin({
  title: 'Twitch React Test',
});

const copyAssets = new CopyWebpackPlugin([ { from: 'source/assets', to: 'static' } ]);

module.exports = {
  mode: 'development',
  entry: './source/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'ventura': path.join(__dirname, 'source')
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: `[name]-[hash].[ext]`
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: {
      assets: false,
      modules: false,
    }
  },
  plugins: [copyAssets, makeHTML],
};