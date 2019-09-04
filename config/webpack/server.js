var path = require('path');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },
  entry: {
    'increment-server': path.resolve('./src/servers/increment-server.tsx'),
    'decrement-server': path.resolve('./src/servers/decrement-server.tsx'),
    'offset-server': path.resolve('./src/servers/offset-server.tsx'),
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
  ]
};
