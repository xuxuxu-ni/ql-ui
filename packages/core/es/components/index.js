import { mainInstall } from "../utils/withInstall.js";
import { version } from "./package.json.js";
import { QlButton } from "./button/index.js";
import { QlLink } from "./link/index.js";
import "../theme-chalk/src/index.scss.js";
const components = [
  QlButton,
  QlLink
];
const install = mainInstall(components);
const index = {
  version,
  install
};
export {
  index as default
};
