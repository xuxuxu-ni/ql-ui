"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const types = require("./types.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "link",
  props: types.linkProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("link");
    defineOptions({
      name: "QlLink"
    });
    const classList = vue.computed(() => {
      return [
        bem.b(),
        props.type ? bem.m(props.type) : null,
        props.underline ? bem.is("underline", props.underline) : null,
        props.disabled ? bem.is("disabled", props.disabled) : null
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("a", {
        class: vue.normalizeClass(vue.unref(classList))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode("Default")
        ])
      ], 2);
    };
  }
});
module.exports = _sfc_main;
