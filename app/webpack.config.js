var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: [/node_modules/,/dist/], loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader" }

		]
	},
	plugins: [HtmlWebpackPluginConfig],
	devtool: 'source-map'
};