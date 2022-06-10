// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "/scripts/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin({ filename: "style.css" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["*.txt"],
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[c]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      { test: /\.txt/, type: "asset/source" },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    alias: {
      CSS: path.resolve(__dirname, "src/css"),
    },
  },
  node: {
    __filename: true,
  },
  devServer: {
    port: 9000,
    host: "localhost",
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = () => {
  if (process.env.NODE_ENV.trim() === "production") {
    config.mode = "production";
    config.output.assetModuleFilename = "images/[hash][ext][query]";
  } else {
    config.mode = "development";
  }
  return config;
};
