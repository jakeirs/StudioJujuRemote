var path = require('path');

module.exports = {
  entry: "./dev/assets/scripts/app.js",
  output: {
    path:  path.join(__dirname, 'build/assets/scripts'),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
