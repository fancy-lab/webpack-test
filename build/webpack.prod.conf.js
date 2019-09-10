const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const utils = require("./utils");
const WebpackMerge = require('webpack-merge');
process.env.NODE_ENV = 'production';
const baseConfig = require('./webpack.base.conf');

const config = WebpackMerge(baseConfig, {
  plugins: [
    new CleanWebpackPlugin(),  // 清空目标目录
    new CopyWebpackPlugin([    // 复制静态文件
      {
        from: utils.resolve("public"),
        to: utils.resolve("dist"),
        toType: "dir"
      },
      {
        from: utils.resolve("static"),
        to: utils.resolve("dist/static"),
        toType: "dir"
      }
    ]),
    new HtmlWebpackPlugin({     // 把css, js注入到html中
      filename: "index.html",
      template: "./public/index.html",
      inject: true
    }),
    new VueLoaderPlugin(),      // vue必须加的
    new MiniCssExtractPlugin({  // 抽取css为单独文件
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});

module.exports = config;
