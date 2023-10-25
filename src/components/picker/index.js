/*
 * @Description:
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-10-25 13:57:34
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved.
 */
import CurrencyPicker from './picker.vue'
import currencyMap from './currencyMap.js'

// 按需引入
export { CurrencyPicker, currencyMap }

const comps = [CurrencyPicker]

export default {
  install(Vue) {
    comps.forEach((com) => {
      Vue.component(com.name, com)
    })
  }
}
