<script setup>
// import { CurrencyPicker } from '../dist/index.mjs'
// import '../dist/style.css' // 导入样式

const form = ref({})

function init() {
  form.value = {}
}
</script>

<template>
  <button @click="init">1455</button>
  <CurrencyPicker v-model:value="form.currency" :labelShowName="false" />
</template>

<style scoped></style>
