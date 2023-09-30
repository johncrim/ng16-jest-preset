module.exports = function (config) {
  karmaConfig = require('../../test/karma-base.conf.cjs')('mylib');
  config.set(karmaConfig);
};
