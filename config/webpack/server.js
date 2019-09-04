const glob = require('glob');
const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

const entry = glob.sync(path.resolve('./src/servers/**/*.tsx')).reduce(
  (x, y) => ({...x, [y.substring(y.lastIndexOf('/') + 1, y.indexOf('.tsx'))]: y}), {}
);

module.exports = {
  devtool: 'source-map',
  watch: true,
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },
  entry,
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
      fileName: 'server.manifest.json'
    })
  ]
};
