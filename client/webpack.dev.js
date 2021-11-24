const { merge } = require("webpack-merge");
const path = require("path");
const common = require(path.resolve(__dirname, "webpack.config.js"));

module.exports = merge(common, {
  mode: "development"
});
