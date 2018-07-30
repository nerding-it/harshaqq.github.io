const path    = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
	test: /\.tag$/,
	exclude: /node_modules/,
	use: [
	  {
	    loader: 'riot-tag-loader',
	    options: {
	      hot: true
	    }
	  }
	]
      },
      {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader'
      },
      {
	test: /\.scss$/,
	use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

	  
