"use strict";
const vue = require("vue");
const create = require("../../../utils/create.js");
const types = require("./types.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "button",
  props: types.buttonProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("button");
    defineOptions({
      name: "QlButton"
    });
    const classList = vue.computed(() => {
      return [
        bem.b(),
        props.type ? bem.m(props.type) : null,
        props.size ? bem.m(props.size) : null,
        props.plain ? bem.m(props.plain) : null,
        props.round ? bem.m(props.round) : null,
        props.disabled ? bem.is("disabled", props.disabled) : null
      ];
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(vue.unref(classList))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
