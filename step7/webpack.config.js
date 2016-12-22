var path = require('path');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	//entry : ['./app.jsx','./browse.jsx','./home.jsx','./search.jsx'],
	entry : {
		app_prod: './app.jsx',
		browse: './browse.jsx',
		home: './home.jsx',
		search: './search.jsx',
		vendor: ['react','react-dom']
	},
	output : {
		path: __dirname + '/public',
		filename: '[name].js'
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
	},
	plugins: [
		new CommonsPlugin({
      minChunks: Infinity,
      name: "vendor"
    }),
	]
}