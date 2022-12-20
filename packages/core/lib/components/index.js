"use strict";
const withInstall = require("../utils/withInstall.js");
const _package = require("./package.js");
const index$1 = require("./button/index.js");
require("../theme-chalk/src/index.js");
const components = [
  index$1.QlButton
];
const install = withInstall.mainInstall(components);
const index = {
  version: _package.version,
  install
};
module.exports = index;
