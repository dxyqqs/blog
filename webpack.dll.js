const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    libs: ['babel-polyfill', 'react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, '/docs/libs'),
    filename: '[name].js',
    library: '[name]_[hash]',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[hash]',
      path: path.join(__dirname, '/docs/dll', 'dll.json'),
    }),

  ],
};
