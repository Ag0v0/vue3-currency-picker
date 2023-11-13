import { createApp } from 'vue'
import App from './App.vue'
import CurrencyPicker from '../dist/index.mjs' //导入
import '../dist/style.css'
// import CurrencyPicker from './components/picker' //导入

const app = createApp(App)

app.use(CurrencyPicker)

app.mount('#app')
