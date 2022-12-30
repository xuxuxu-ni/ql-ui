import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode } from "vue";
import { createNamespace } from "../../../utils/create.js";
import { linkProps } from "./types.js";
const _hoisted_1 = ["href"];
const __default__ = defineComponent({
  name: "QlLink"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: linkProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("link");
    const classList = computed(() => {
      return [
        bem.b(),
        props.type ? bem.m(props.type) : null,
        props.underline ? bem.is("underline", props.underline) : null,
        props.disabled ? bem.is("disabled", props.disabled) : null
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(unref(classList)),
        href: props.disabled || !props.href ? void 0 : props.href
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode("Default")
        ])
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
