module.exports = function (config) {
  karmaConfig = require('../../test/karma-base.conf.cjs')('myapp');
  config.set(karmaConfig);
};
