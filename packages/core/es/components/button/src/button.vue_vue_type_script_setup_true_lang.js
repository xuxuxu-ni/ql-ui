import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { createNamespace } from "../../../utils/create.js";
import { buttonProps } from "./types.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "button",
  props: buttonProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("button");
    defineOptions({
      name: "QlButton"
    });
    const classList = computed(() => {
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
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(unref(classList))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
