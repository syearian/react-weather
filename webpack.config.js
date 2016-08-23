var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'font', to: 'font' },
  { from: 'images', to: 'images' },
  { from: 'css', to: 'css'},
  { from: 'index.html', to: 'index.html'}
]);

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    './index.js'
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
    ]
  },
  plugins: [
    CopyWebpackPluginConfig
  ]
};
