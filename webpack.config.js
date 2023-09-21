const path = require('path');
const HTMLWebPackPlugIn = require('html-webpack-plugin');
const WASMPackPlugIn = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
	entry: './public/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script.js'
	},
	plugins: [
		new HTMLWebPackPlugIn({
			template: './public/index.html',
			favicon: './public/favicon.ico'
		}),
		new WASMPackPlugIn({crateDirectory: path.resolve(__dirname, './')})
	],
	experiments: {asyncWebAssembly: true}
};