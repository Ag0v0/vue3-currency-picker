/*
 * @Description:
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-11-08 10:56:16
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved.
 */
import CurrencyPicker from './picker.vue'
import currencyList from './currencyList.js'

// 按需引入
export { CurrencyPicker, currencyList }

const comps = [CurrencyPicker]

export default {
  install(Vue) {
    comps.forEach((com) => {
      Vue.component(com.name, com)
    })
  }
}
