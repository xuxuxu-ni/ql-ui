import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createTextVNode } from "vue";
import { createNamespace } from "../../../utils/create.js";
import { linkProps } from "./types.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "link",
  props: linkProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("link");
    defineOptions({
      name: "QlLink"
    });
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
