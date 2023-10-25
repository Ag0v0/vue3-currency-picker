<!--
 * @Description: 
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-10-25 11:00:02
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved. 
-->
<script setup>
const form = reactive({
  currency: 'CNY'
})
</script>

<template>
  <CurrencyPicker v-model:value="form.currency" :labelShowName="false" />
</template>

<style scoped></style>
