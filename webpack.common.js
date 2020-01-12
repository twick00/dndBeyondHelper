const path = require('path')
const glob = require('glob')
console.log(glob.sync('./src/injected/**/*.{ts|tsx}'))

module.exports = {
	entry: {
		'js/injectIndex': path.join(__dirname, 'src/injectIndex.ts'),
		'js/popup': path.join(__dirname, 'src/popup/index.tsx'),
		index: path.join(__dirname, 'src/injected/index.ts')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				exclude: /node_modules/,
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader' // Creates style nodes from JS strings
					},
					{
						loader: 'css-loader' // Translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // Compiles Sass to CSS
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@src': path.resolve(__dirname, 'src/')
		}
	}
}
