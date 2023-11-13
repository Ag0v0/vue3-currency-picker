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
