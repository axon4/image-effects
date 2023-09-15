const path = require('path');
const HTMLWebPackPlugIn = require('html-webpack-plugin');

module.exports = {
	entry: './public/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script.js'
	},
	plugins: [
		new HTMLWebPackPlugIn({template: './public/index.html'})
	]
};