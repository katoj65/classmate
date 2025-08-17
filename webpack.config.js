const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // You can customize here
  webpack.chainWebpack((config) => {
    // Example: enable source maps
    config.devtool("source-map");
  });

  return webpack.resolveConfig();
};
