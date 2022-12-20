"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function withInstall(component) {
  component.install = function(app) {
    app.component(component.name, component);
  };
  return component;
}
function mainInstall(components) {
  return function(app) {
    components.forEach(function(item) {
      if (item.install) {
        app.use(item);
      }
    });
  };
}
exports.mainInstall = mainInstall;
exports.withInstall = withInstall;
