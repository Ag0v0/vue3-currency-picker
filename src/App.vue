<!--
 * @Description: 
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-10-25 14:49:03
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved. 
-->
<script setup>
// import { CurrencyPicker } from '../dist/index.mjs'
// import '../dist/style.css' // 导入样式

const form = reactive({
  currency: 'CNY'
})
</script>

<template>
  <CurrencyPicker v-model:value="form.currency" :labelShowName="false" />
</template>

<style scoped></style>
