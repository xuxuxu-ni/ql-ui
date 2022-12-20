import { mainInstall } from "../utils/withInstall.js";
import { version } from "./package.js";
import { QlButton } from "./button/index.js";
import "../theme-chalk/src/index.js";
const components = [
  QlButton
];
const install = mainInstall(components);
const index = {
  version,
  install
};
export {
  index as default
};
