const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: "./",
  configureWebpack: () => {
    const plugins = [
      /**
       * js ファイルをGZIP圧縮する
       */
      new CompressionPlugin({ test: /\.js$/, filename: "[path].gz" })
    ];
    const output = {
      filename: "js/[name].js",
      chunkFilename: "js/[name].chunk.js"
    };
    return { plugins, output };
  }
};
