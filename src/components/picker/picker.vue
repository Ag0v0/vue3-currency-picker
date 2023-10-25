<!--
 * @Description: 
 * @Author: Ag
 * @LastEditors: Ag
 * @LastEditTime: 2023-10-25 14:03:04
 * Copyright (c) 2023 by CIGLINK, All Rights Reserved. 
-->
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-tag v-if="props.justTag" class="v3-currency-tag" v-bind="$attrs">
      <svg-icon :icon="findCurrency(pickerValue)?.flag || ''" size="2em" />
      <slot name="tag-text" :currency="findCurrency(pickerValue)">
        <span>{{ pickerValue }}</span>
        <span v-if="props.labelShowName">{{ findCurrency(pickerValue)?.name }}</span>
      </slot>
    </n-tag>

    <n-picker
      v-else
      class="v3-currency-picker"
      v-model:value="pickerValue"
      :multiple="props.multiple"
      :placeholder="props.placeholder"
      value-field="currency"
      label-field="currency"
      :options="props.options"
      :render-label="renderLabel"
      :render-tag="props.multiple ? renderMultiplePickerTag : renderSinglePickerTag"
      v-bind="$attrs"
    />
  </n-config-provider>
</template>

<script setup>
import currencyMap from './currencyMap'
import { NTag, NImage } from 'naive-ui'

defineOptions({
  name: 'CurrencyPicker'
})

const props = defineProps({
  value: String | Array,
  justTag: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => currencyMap
  },
  multiple: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  labelShowName: {
    type: Boolean,
    default: true
  },
  optionShowName: {
    type: Boolean,
    default: true
  },
  primaryColor: {
    type: String,
    default: '#2E65FF'
  }
})

const emits = defineEmits(['update:value'])

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = computed(() => {
  return {
    common: {
      primaryColor: props.primaryColor + 'FF',
      primaryColorHover: props.primaryColor + 'AA',
      primaryColorPressed: props.primaryColor + '55',
      primaryColorSuppl: props.primaryColor + 'AA'
    }
  }
})

const pickerValue = computed({
  get() {
    return props.value
  },
  set(val) {
    emits('update:value', val)
  }
})

const renderLabel = (option) => {
  return h('div', { class: 'v3-currency-picker__label' }, [
    typeof option.flag === 'function'
      ? option.flag()
      : h(NImage, { src: option.flag || '', width: '28', previewDisabled: true }),
    h('span', { class: 'v3-currency-picker__label_code' }, option.currency),
    props.optionShowName && h('span', { class: 'v3-currency-picker__label_name' }, option.name)
  ])
}

const renderSinglePickerTag = ({ option }) => {
  return h('div', { class: 'v3-currency-picker__tag' }, [
    h('span', { class: 'v3-currency-picker__tag_code' }, option.currency),
    props.labelShowName && h('span', { class: 'v3-currency-picker__tag_name' }, option.name),
    typeof option.flag === 'function'
      ? option.flag()
      : h(NImage, { src: option.flag || '', width: '28', previewDisabled: true })
  ])
}

const renderMultiplePickerTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      style: { padding: '0 6px 0 4px' },
      round: true,
      closable: true,
      onClose: (e) => {
        e.stopPropagation()
        handleClose()
      }
    },
    { default: () => renderSinglePickerTag({ option }) }
  )
}

const findCurrency = (currency) => {
  return currencyMap.find((item) => item.currency === currency) || {}
}
</script>

<style lang="scss" scoped>
.v3-currency-tag {
  :deep(.n-tag__content) {
    display: flex;
    align-items: center;
    > span {
      margin-left: 8px;
      font-size: 14px;
    }
  }
}
.v3-currency-picker {
  :deep(.n-base-pickerion-input__content) {
    .v3-currency-picker__label,
    .v3-currency-picker__tag {
      display: flex;
      align-items: center;
      font-size: 14px;
    }

    .v3-currency-picker__tag_code {
      margin-right: 8px;
    }

    .v3-currency-picker__tag_name {
      margin-right: 8px;
      color: #acacac;
    }
  }
}
</style>

<style lang="scss">
.n-base-picker-option {
  .v3-currency-picker__label {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .v3-currency-picker__label_code {
    display: inline-block;
    min-width: 30px;
    padding-left: 10px;
    padding-right: 8px;
  }

  .v3-currency-picker__label_name {
    color: #acacac;
  }

  &.n-base-picker-option--pickered {
    .v3-currency-picker__label_name {
      color: var(--n-option-text-color-active);
    }
  }
}
</style>
