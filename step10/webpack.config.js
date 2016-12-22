var path = require('path');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//entry : ['./app.jsx','./browse.jsx','./home.jsx','./search.jsx'],
	entry : {
		app_prod:'./app.jsx',
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
			},
			{
				test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
			}
		]
	},
	postcss: [
		require('precss'),
    require('autoprefixer-core'),
  ],
	plugins: [
		new CommonsPlugin({
      minChunks: Infinity,
      name: "vendor"
    }),
	]
}