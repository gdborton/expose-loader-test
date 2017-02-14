module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: './dist',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'expose-loader?react!expose-loader?React!expose-loader?whateverthingiwant'
      }
    ]
  }
};
