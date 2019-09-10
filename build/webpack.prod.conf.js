const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const utils = require("./utils");
const WebpackMerge = require('webpack-merge');
process.env.NODE_ENV = 'production';
const baseConfig = require('./webpack.base.conf');

const config = WebpackMerge(baseConfig, {
  mode: 'production',
  output: {
    filename: "[name].[hash:7].js",
    path: utils.resolve("dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'nextop webpack test',  // 指定了template, title就无效了
      template: 'src/index.html',
      templateParameters: {
        title: 'nextop webpack test',
        hash: true,
        dll: '',
      }
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          filename: 'vendor.bundle.js',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
  }
});

module.exports = config;
