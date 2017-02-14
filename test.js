const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
compiler.run((err, stats) => {
  if (err) throw err;
  const react = require('react');

  // assertions are in the dist output.
  require('./dist/main');
});
