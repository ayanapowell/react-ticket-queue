const webpack = require("./node_modules/webpack/lib/webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: "app.bundle.js",
    path: resolve(__dirname, "build"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "#source-map",

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [["es2015", { modules: false }], "react"],
          plugins: ["react-hot-loader/babel", "styled-jsx/babel"]
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "template.ejs",
      appMountId: "react-app-root",
      title: "React Help Queue",
      filename: resolve(__dirname, "build", "index.html")
    })
  ]
};
