const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]_[contenthash].main.js",
  },

  resolve: {
    extensions: ['.jsx', '.less', '.js', '.css'],
    alias:{
      "@":path.join(__dirname,'./src')
    }
  },


  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      //假设是前台应用入口
      title: "首页",
      filename: "index.html",
      template: "./public/index.html",
      chunks: ["index"], //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
    }),
    new HtmlWebpackPlugin({
      //假设是后台应用入口one:"./src/one.js"
      title: "One",
      filename: "one.html",
      template: "./public/one.html",
      chunks: ["one"], //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
    }),
  
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env", "@babel/preset-react"],
          //   },
        },
      },
      
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         publicPath: "./../img", //该属性指明我们最终引用的文件路径（打包生成的index.html文件里面引用资源的前缀）
      //         outputPath: "img/", //图片复制到的文件夹
      //       },
      //     },
      //     {
      //       loader: "image-webpack-loader",
      //     },
      //   ],
      // },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "./../img",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "./../fonts",
          outputPath: "fonts/",
        },
      },
    ],
  },

  
};
