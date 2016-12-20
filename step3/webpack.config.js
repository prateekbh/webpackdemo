var path = require('path');

module.exports = {
	entry : './app.jsx',
	output : {
		path: __dirname + '/public',
		filename: 'app_prod.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					plugins:[
            ["transform-react-jsx"]
          ]
				}
			}
		]
	}
}