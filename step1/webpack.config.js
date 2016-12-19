var path = require('path');

module.exports = {
	entry : './app.js',
	output : {
		path: __dirname + '/public',
		filename: 'app_prod.js'
	}
}