const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
   
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }

    Object.assign(config.resolve.fallback, {
      inspector: false,
    });
  });

  return webpack.resolveConfig();
};
