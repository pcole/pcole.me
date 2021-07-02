const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.ts",
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.glsl$/, loader: "webpack-glsl-loader" },
		],
	},
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".glsl"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Phil's Website",
    }),
  ],
	output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
	},
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
