const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.jsx',
  },
  output: {
    publicPath: '.',
    path: path.join(__dirname, 'docs'),
    filename: 'libs/[name].js?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      components: path.join(__dirname, 'app/components'),
      pageData: path.join(__dirname, 'app/data'),
    },
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'docs'),
    port: 12341,
    publicPath: '/',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'docs/dll', 'dll.json')),

    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'app/index.html'),
      title: 'my site',
    }),

  ],

};
