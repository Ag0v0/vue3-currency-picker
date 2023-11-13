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
