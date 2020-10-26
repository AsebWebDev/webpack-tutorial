var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    mode: "development",
    // devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/template.html'
    })],

}