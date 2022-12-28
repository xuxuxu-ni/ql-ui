<script setup lang="ts">



</script>

<template>
  <div style="margin-bottom: 30px">
    link
    <ql-link underline></ql-link>
    <ql-link type="primary" href="http://www.baidu.com"></ql-link>
    <ql-link type="success" underline href="http://www.baidu.com" disabled></ql-link>
    <ql-link type="info" disabled></ql-link>
    <ql-link type="warning" underline></ql-link>
    <ql-link type="danger" href="http://www.baidu.com" underline></ql-link>
  </div>
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
    plain
    <QlButton plain>Default</QlButton>
    <ql-button type="primary" plain>primary</ql-button>
    <ql-button type="success" plain></ql-button>
    <ql-button type="info" plain></ql-button>
    <ql-button type="warning" plain></ql-button>
    <ql-button type="danger" plain></ql-button>
  </div>
  <div style="margin-bottom: 30px">
    text
    <ql-button plain text>Default</ql-button>
    <ql-button type="primary" text>primary</ql-button>
    <ql-button type="success" text></ql-button>
    <ql-button type="info" text></ql-button>
    <ql-button type="warning" text></ql-button>
    <ql-button type="danger" text></ql-button>
  </div>
  <div style="margin-bottom: 30px">
    disabled
    <ql-button disabled>Default</ql-button>
    <ql-button type="primary" disabled>primary</ql-button>
    <ql-button type="success" disabled></ql-button>
    <ql-button type="info" disabled></ql-button>
    <ql-button type="warning" disabled></ql-button>
    <ql-button type="danger" disabled></ql-button>
  </div>
  <div style="margin-bottom: 30px">
    disabled plain
    <ql-button plain disabled>Default</ql-button>
    <ql-button type="primary" plain disabled>primary</ql-button>
    <ql-button type="success" plain disabled></ql-button>
    <ql-button type="info" plain disabled></ql-button>
    <ql-button type="warning" plain disabled></ql-button>
    <ql-button type="danger" plain disabled></ql-button>
  </div>
  <div style="margin-bottom: 30px">
    disabled text
    <ql-button plain text disabled>Default</ql-button>
    <ql-button type="primary" text disabled>primary</ql-button>
    <ql-button type="success" text disabled></ql-button>
    <ql-button type="info" text disabled></ql-button>
    <ql-button type="warning" text disabled></ql-button>
    <ql-button type="danger" text disabled></ql-button>
  </div>
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
