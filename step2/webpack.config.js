var path = require('path');

module.exports = {
	entry : './app.js',
	output : {
		path: __dirname + '/public',
		filename: 'app_prod.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}