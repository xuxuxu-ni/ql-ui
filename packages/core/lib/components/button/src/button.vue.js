"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const types = require("./types.js");
const __default__ = vue.defineComponent({
  name: "QlButton"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.buttonProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("button");
    const classList = vue.computed(() => {
      return [
        bem.b(),
        props.type ? bem.m(props.type) : null,
        props.size ? bem.m(props.size) : null,
        props.plain ? bem.is("plain", props.plain) : null,
        props.round ? bem.is("round", props.round) : null,
        props.text ? bem.is("text", props.text) : null,
        props.disabled ? bem.is("disabled", props.disabled) : null
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
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
