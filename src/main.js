/*
 * @Description:
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-10-25 13:57:59
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
// import CurrencyPicker from '../dist/index.mjs' //导入
// import '../dist/style.css'
import CurrencyPicker from './components/picker' //导入

const app = createApp(App)

app.use(CurrencyPicker)

app.mount('#app')
