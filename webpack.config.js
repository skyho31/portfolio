var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: '[name].css'
});

module.exports = {
  entry: {
    index: "./src/js/index.js",
    contact: "./src/js/contact.js",
    about: "./src/js/about.js",
    works: "./src/js/works.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: ["css-loader"]
        })
      },
      {
        test: /\.html$/,
        use: ["html-loader?interpolate"]
      },
      {
        test: /\.(jpg|png|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ["index", "works"]
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/about.html",
      chunks: ["index", "about"]
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/contact.html",
      chunks: ["index", "contact"]
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};