module.exports = {
  entry: './src/main',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }]
  },
  resolve: {
    root: __dirname + '/src'
  }
};