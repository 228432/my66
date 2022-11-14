const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require('webpack-merge');
const base=require('./webpack.config.base')
module.exports =merge(base,{

  mode: "production",




  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name]-[hash].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
    
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: false,
            },
          },
        ],
      },

      {
        test: /\.less$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles sass to CSS
          },
        ],
      },
    
    ],
  },

  
});
