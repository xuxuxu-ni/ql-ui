"use strict";
const withInstall = require("../utils/withInstall.js");
const _package = require("./package.json.js");
const index$1 = require("./button/index.js");
const index$2 = require("./link/index.js");
require("../theme-chalk/src/index.scss.js");
const components = [
  index$1.QlButton,
  index$2.QlLink
];
const install = withInstall.mainInstall(components);
const index = {
  version: _package.version,
  install
};
module.exports = index;
