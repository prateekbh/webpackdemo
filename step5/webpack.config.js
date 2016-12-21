var path = require('path');

module.exports = {
	//entry : ['./app.jsx','./browse.jsx','./home.jsx','./search.jsx'],
	entry : {
		browse: './browse.jsx',
		home: './home.jsx',
		search: './search.jsx'
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?name=[hash].[ext]',
            'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
    }
		]
	}
}