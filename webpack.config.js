var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'font' },
  { from: 'images' }
]);

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
  module: {
    loaders: [
      {
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
    ]
  },
  context: path.join(__dirname, 'app'),
  plugins: [
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig
  ]
};
