const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "src/[name].[fullhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: 9090,
    open: true,
    hot: true,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
      webSocketTransport: "ws",
    },
    webSocketServer: "ws",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inject: "body",
      hash: true,
    }),
    new ESLintPlugin({
      extensions: "js",
      exclude: "node_modules",
      files: "./src/",
      failOnError: false,
      emitWarning: true, // Les erreurs sont traitées comme des avertissements
    }),
    new Dotenv(),
  ],
};
