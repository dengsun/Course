const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // ... other options
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}