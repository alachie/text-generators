var debug        = process.env.NODE_ENV !== "production";
var webpack      = require('webpack');
var path         = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'react', 
            'es2015', 
            'stage-0'
          ],
          plugins: [
            'react-html-attrs', 
            'transform-class-properties', 
            'transform-decorators-legacy'
          ],
        }
      },
      {test: /\.sass$/, loader: 'style!css!postcss-loader!sass!'}
    ]
  },
  sassLoader: {
    indentedSyntax: true,
    precision: 2
  },
  postcss: function () {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      "process.env": { 
          NODE_ENV: JSON.stringify("production") 
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
  ]
};
