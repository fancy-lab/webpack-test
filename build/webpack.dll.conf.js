const path = require('path');
const webpack = require('webpack');
const utils = require("./utils");

const config = {
  entry: {
    vendor: ['lodash-es']
  },
  // mode: 'development',
  mode: 'production',
  output: {
    path: utils.resolve('dll'),
    filename: '[name].dll.js',
    library: '[name]_library'       // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '..', 'dll', '[name]-manifest.json'),
      name: '[name]_library'
    }),
  ],
  optimization: {
    // concatenateModules: true,
    // usedExports: true,
    // sideEffects: true,
  }
};

module.exports = config;
