<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        :is="`el-icon-${toLine(upIcon)}`"
      />
      <component
        v-if="type === 'down'"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        :is="`el-icon-${toLine(downIcon)}`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
import { toLine } from '../../../utils'

let props = defineProps({
  // 标记当前趋势是上升（up）还是下降（down）
  type: {
    type: String,
    default: 'up'
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: '文字'
  },
  // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false
  },
  // 上升趋势的图标颜色
  upIconColor: {
    type: String,
    default: ''
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: ''
  },
  // 上升趋势的文字颜色
  upTextColor: {
    type: String,
    default: 'rgb(0, 0, 0)'
  },
  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: 'rgb(0, 0, 0)'
  }
})

// 获取插槽
let slots = useSlots()

// 文字颜色
let textColor = computed(() => {
  if (props.type === 'up') {
    return props.upTextColor
  } else {
    return props.downTextColor
  }
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>