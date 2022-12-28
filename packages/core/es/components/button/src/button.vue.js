import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode } from "vue";
import { createNamespace } from "../../../utils/create.js";
import { buttonProps } from "./types.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "QlButton",
  props: buttonProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("button");

    const classList = computed(() => {
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
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(classList))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode("Default")
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
