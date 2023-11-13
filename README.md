# vue3-currency-picker

vue3-currency-picker 是一个用于选择货币的下拉组件，使用 Vue 3 + Naive-UI 构建。

## 安装

```
npm install vue3-currency-picker
# or
yarn add vue3-currency-picker
```

## 使用

你可以全局注册组件或者局部引入它。

**全局注册：**

```
import CurrencyPicker from 'vue3-currency-picker';
import 'vue3-currency-picker/dist/style.css'; // 导入样式

Vue.use(CurrencyPicker);
```

**局部引入：**

```
<script setup>
import { CurrencyPicker } from 'vue3-currency-picker';
import 'vue3-currency-picker/dist/style.css'; // 导入样式

const form = reactive({
  currency: 'CNY'
})
</script>

<template>
  <currency-picker v-model:value="form.currency" />
</template>

```

## Props

组件使用了 Naive-UI，大部分 [NPicker](https://www.naiveui.com/zh-CN/os-theme/components/picker) 和 [NTag](https://www.naiveui.com/zh-CN/os-theme/components/tag) 的 props 都是支持的。

.

此外，组件本身的props如下：

| Prop Name      | Type                                                | Default       | Description                          |
| :------------- | --------------------------------------------------- | ------------- | ------------------------------------ |
| value          | `Array<string \| number> \| string \| number \| null` | `undefined` | 选择器的绑定值，可以使用 `v-model` |
| justTag        | `Boolean`                                         | `false`     | 使用标签模式                         |
| options        | `Array`                                           | currencyList  | 自定义选项，点此查看                 |
| nameField      | `String`                                          | `'name'`    | 名称字段                             |
| flagField      | `String`                                          | `'flag'`    | 旗帜字段                             |
| multiple       | `Boolean`                                         | `false`     | 是否多选                             |
| labelShowName  | `Boolean`                                         | `true`      | 是否在标签上显示币种名称             |
| optionShowName | `Boolean`                                         | `true`      | 是否在选项上显示币种名称             |
| primaryColor   | `String`                                          | `'#2E65FF'` | 主题颜色，只支持16进制               |

## 支持的币种

当前版本含有的币种（当然，你可以自定义币种选项）：

| Currency Code | Country/Organization |
| ------------- | -------------------- |
| AUD           | Australia            |
| CAD           | Canada               |
| CHF           | Switzerland          |
| GBP           | United Kingdom       |
| HKD           | Hong Kong            |
| JPY           | Japan                |
| NZD           | New Zealand          |
| SEK           | Sweden               |
| SGD           | Singapore            |
| THB           | Thailand             |
| USD           | United States        |
| EUR           | European Union       |
| MYR           | Malaysia             |
| KRW           | South Korea          |
| CNY           | China                |
| RUB           | Russia               |
| DKK           | Denmark              |
| AED           | United Arab Emirates |
| NOK           | Norway               |
| PLN           | Poland               |
| VND           | Vietnam              |
| HUF           | Hungary              |
| KZT           | Kazakhstan           |
| MXN           | Mexico               |
| SAR           | Saudi Arabia         |
| INR           | India                |
| PHP           | Philippines          |
| MNT           | Mongolia             |
| KHR           | Cambodia             |

## 自定义 options

你可以导入组件里的 currencyList 进行一些修改：

```
import { currencyList } from 'vue3-currency-picker'
```

或者自定义，例如：

```
[
  {
    currency: 'AUD',
    flag: ()=> h(Icon),
    name: '澳元',
  },
]
```

## Packages

The main npm packages used in this project are the following:

- vue.js v3
- naive-ui

## License

MIT © 2020 Ag Liu
