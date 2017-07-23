const webpack = require('webpack');
const config = require('./webpack.config');
const production = require('./config/production');

config.devtool = config.watch = false;
config.plugins = [
  new webpack.DefinePlugin(production)
];

module.exports = config;