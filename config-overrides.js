/**
 * Overrides build config settings webpack & babel
 */
const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = function override(config, env) {
  //config.output.filename = 'static/js/index.js';
  //config.output.library = 'mindd';
  //config.output.libraryTarget = 'umd';
  //config.output.umdNamedDefine = true;
  //config.optimization.runtimeChunk = false;
  // config.optimization.splitChunks = {
  // 	cacheGroups: {
  // 		default: false
  // 	}
  // };
  config = rewireStyledComponents(config, env, {
    displayName: true,
    fileName: false
  });
  return config;
};
