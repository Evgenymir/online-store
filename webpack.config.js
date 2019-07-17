const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: {
		app: './src/js/app.js'
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'build/js')
	},
	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin()
	// 	]
	// },
	plugins: [],
	module: {
		rules: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};

module.exports = config;