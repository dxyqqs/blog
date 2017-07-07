const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
  },
  output: {
    publicPath:'.',
    path: path.join(__dirname, 'docs'),
    filename: 'libs/[name].js?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'docs/dll', 'dll.json')),
      sourceType: 'commonjs2',
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'app/index.html'),
      title: 'my site',
    }),
  ],
};
