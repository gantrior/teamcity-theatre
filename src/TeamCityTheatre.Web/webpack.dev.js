const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    "dashboard": "./views/home/dashboard.js",
    "settings": "./views/home/settings.js"
  },
  output: {
    path: path.resolve(__dirname, "wwwroot/js"),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
};