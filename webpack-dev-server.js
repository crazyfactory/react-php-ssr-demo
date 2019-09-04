const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackClientConfig = require('./config/webpack/dev');
const webpackServerConfig = require('./config/webpack/server');

const webpackClientCompiler = webpack(webpackClientConfig);
const webpackServerCompiler = webpack(webpackServerConfig);

const clientWebpackDevServer = new WebpackDevServer(webpackClientCompiler, {writeToDisk: true});

const serverWebpackDevServer = new WebpackDevServer(webpackServerCompiler, {writeToDisk: true});

clientWebpackDevServer.listen(8081, 'localhost');
serverWebpackDevServer.listen(8082, 'localhost');
