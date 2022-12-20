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
export {
  mainInstall,
  withInstall
};
