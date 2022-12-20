---
# 这是文章的标题
title: 按钮
# 这是页面的图标
# icon: page
# 这是侧边栏的顺序
order: 1
# 设置作者
author: NiRongxu
# 设置写作时间
date: 2022-12-09
# 一个页面可以有多个分类
category:
  - 组件
# 一个页面可以有多个标签
tag:
  - button
  - 按钮
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: ql-ui
---


## Button 组件
### 基础使用

::: vue-playground Vue 交互演示

@file App.vue

```vue
<template>
  <MyButton typeof="">按钮</MyButton>
</template>

<script lang="ts" setup>
import MyButton from "MyButton";
</script>

<style scoped>

</style>

```

@import

```json
{
  "imports": {
    "MyButton": "@components/button"
  }
}
```


:::
