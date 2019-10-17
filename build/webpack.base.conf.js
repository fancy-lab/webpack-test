const utils = require("./utils");

const config = {
  entry: {
    // app: "./src/main.ts",
    index: "./src/index.js",
  },
  output: {
    filename: `[name].js`,
    path: utils.resolve("dist")
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": utils.resolve("src")
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader"
      //     },
      //     {
      //       loader: "ts-loader",
      //     }
      //   ],
      // },
      // {
      //   include: utils.resolve("node_modules", "lodash"),
      //   sideEffects: false
      // }

      {
        'loader': 'babel-loader',
        'test': /\.js$/,
        'exclude': /node_modules/,
        'query': {
          'plugins': ['lodash'],
          'presets': [['@babel/env', { 'targets': { 'node': 6 } }]]
        }
      }
    ],
  }
};

module.exports = config;
