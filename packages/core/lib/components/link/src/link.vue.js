"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const types = require("./types.js");
const _hoisted_1 = ["href"];
const __default__ = vue.defineComponent({
  name: "QlLink"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.linkProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("link");
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
        class: vue.normalizeClass(vue.unref(classList)),
        href: props.disabled || !props.href ? void 0 : props.href
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode("Default")
        ])
      ], 10, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
