const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
    assetModuleFilename:'[name][ext]'
  },
  devServer: {
    hot: true,
    port: 9000,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //   },
        // ],
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 1024000,
      //         name: path + ".[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
