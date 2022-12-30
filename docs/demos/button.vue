<script setup lang="ts">
import {mainInstall} from '@ql-ui/utils/withInstall'
const components = [
  'QlButton',
  mainInstall,
  'QlLink'
]
const install = mainInstall(components);
</script>
<template>
  <div style="margin-bottom: 30px">
    基础按钮
    <ql-button>Default</ql-button>
    <ql-button type="primary">primary</ql-button>
    <ql-button type="success"></ql-button>
    <ql-button type="info"></ql-button>
    <ql-button type="warning"></ql-button>
    <ql-button type="danger"></ql-button>
  </div>
  <div style="margin-bottom: 30px">
    large
    <ql-button size="large">Default</ql-button>
    <ql-button type="primary" size="large">primary</ql-button>
    <ql-button type="success"></ql-button>
    <ql-button type="info"  size="small"></ql-button>
    <ql-button type="warning" size="large"></ql-button>
    <ql-button type="danger" size="large"></ql-button>
  </div>
</template>
<style>
.ql-button,.ql-link {
  margin-left: 15px;
}
</style>
