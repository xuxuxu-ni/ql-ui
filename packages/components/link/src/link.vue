<template>
    <a :class="classList" :href="props.disabled ? null : props.href" :target="props.href ? '_blank': null">
      <slot>Default</slot>
    </a>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {createNamespace} from "@ql-ui/utils/create";
import { linkProps } from './types'
const bem = createNamespace('link')

defineOptions({
  name: "QlLink",
});
const props = defineProps(linkProps)

const classList = computed(() => {
  return [
    bem.b(),
    props.type ? bem.m(props.type) : null,
    props.underline ? bem.is('underline', props.underline) : null,
    props.disabled ? bem.is('disabled', props.disabled) : null,
  ]
})
</script>
<style lang="scss">

</style>
