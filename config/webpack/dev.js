const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'source-map',
  watch: true,
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  entry: {
    client: path.resolve('./src/client.tsx'),
  },
  output: {
    path: path.resolve('./build'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new ManifestPlugin({
      publicPath: '/build/',
      fileName: 'client.manifest.json'
    })
  ]
};
