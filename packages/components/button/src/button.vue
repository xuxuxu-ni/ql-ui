<template>
    <button :class="classList" >
      <slot>Default</slot>
    </button>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {createNamespace} from "@ql-ui/utils/create";
import { buttonProps } from './types'
const bem = createNamespace('button')

defineOptions({
  name: "QlButton",
});
const props = defineProps(buttonProps)

const classList = computed(() => {
  return [
    bem.b(),
    props.type ? bem.m(props.type) : null,
    props.size ? bem.m(props.size) : null,
    props.plain ? bem.is('plain', props.plain) : null,
    props.round ? bem.is('round', props.round) : null,
    props.text ? bem.is('text', props.text) : null,
    props.disabled ? bem.is('disabled', props.disabled) : null,
  ]
})
</script>
<style lang="scss">

</style>
