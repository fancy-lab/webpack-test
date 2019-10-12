// const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const ModuleTrackerPlugin = require('webpack-module-tracker');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require("./utils");
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

const config = WebpackMerge(baseConfig, {
  // devtool: "cheap-module-eval-source-map",
  // devtool: "inline-source-map", // 在chrome的source里可以方便查看源码
  devtool: false,
  mode: 'development',
  // mode: 'production',
  output: {
    filename: "[name].js",
    path: utils.resolve("dev_dist")
  },
  plugins: [
    new BundleAnalyzerPlugin({analyzerMode: 'static', generateStatsFile: true, statsFilename: 'stats_node_module.json'}),
    // new ModuleTrackerPlugin(),
    // new TerserPlugin(),
    // new CopyWebpackPlugin([    // 复制静态文件
    //   {
    //     from: utils.resolve("public"),
    //     to: utils.resolve("dist"),
    //     toType: "dir"
    //   },
    // ]),

    // new HtmlWebpackPlugin({
    //   title: 'nextop webpack test',  // 指定了template, title就无效了
    //   template: 'src/index.html',
    //   templateParameters: {
    //     title: 'nextop webpack test',
    //     hash: true,
    //     dll: `<script src="../dll/vendor.dll.js"></script>`, // for development
    //   }
    // }),

    // new webpack.DllReferencePlugin({
    //   context: path.resolve(__dirname, '..'),
    //   name: 'vendor_library',
    //   manifest: require('../dll/vendor-manifest.json')
    // }),
  ],
  optimization: {
    concatenateModules: true,
    usedExports: true,
    // 只有是true, 才能使用lodash-es/package.json中的 'useEffects: false' 的设定
    // 配置成false, 表示全项目都没有 side effects,  lodash-es/package.json 的设定, 就不起作用了
    sideEffects: true,
    // minimize: true,
    // minimizer: [new TerserPlugin()],
  }
});

// 用了DllPlugin, 就不需要拆包了, production可以用
if (false) {
  config.optimization.splitChunks = {
    chunks: 'all',
    // minSize: 30000,
    // maxSize: 0,
    // minChunks: 1,
    // maxAsyncRequests: 5,
    // maxInitialRequests: 3,
    // automaticNameDelimiter: '~',
    // automaticNameMaxLength: 30,
    // name: true,
    cacheGroups: {
      vendors: {
        filename: 'common.bundle.js',
        test: /\.\/common/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      },
      chunks: 'all',
    }
  };
}

module.exports = config;
