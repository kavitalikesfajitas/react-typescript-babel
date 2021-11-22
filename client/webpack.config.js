const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MAIN_DIR_FOLDER = "boilerplate";
const IMAGE_DIR = path.resolve(__dirname, `${MAIN_DIR_FOLDER}/src/images`);

const BUILD_DIR = path.resolve(__dirname, `dist/${MAIN_DIR_FOLDER}`);
const APP_DIR = path.resolve(__dirname, `${MAIN_DIR_FOLDER}/src/app`);

const config = {
  context: path.join(__dirname, `${MAIN_DIR_FOLDER}/src`),
  mode: "production",
  devtool: "inline-source-map",
  entry: `${APP_DIR}/components/index.tsx`,
  output: {
    path: BUILD_DIR,
    filename: "client.min.js"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, // to support @font-face rule
        loader: "url-loader"
      },
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.(ts|tsx)$/,
        include: APP_DIR,
        exclude: /(node_modules)/,
        use: ["ts-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "css-modules-typescript-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 5000, // Defaults to 8080,
    open: "index.html"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: IMAGE_DIR,
          to: path.join(BUILD_DIR, "images"),
          noErrorOnMissing: true
        }
      ]
    })
  ]
};

module.exports = config;
