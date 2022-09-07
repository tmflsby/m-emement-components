<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
        v-bind="$attrs.startOptions"
      ></el-date-picker>
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOptions"
      ></el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref, watch} from 'vue'

let props = defineProps({
  // 开始日期的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  // 结束日期的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true
  }
})

let emits = defineEmits(['startChange', 'endChange'])

// 开始日期
let startDate = ref<Date | null>(null)
// 结束日期
let endDate = ref<Date | null>(null)
// 控制结束日期是否禁用
let endDateDisabled = ref<boolean>(true)

// 开始日期禁用
let startDisabledDate = (date: Date) => {
  if (props.disableToday) {
    return date.getTime() < Date.now() - 86400000
  }
}

// 结束日期禁用
let endDisabledDate = (date: Date) => {
  if (startDate.value) {
    return date.getTime() < startDate.value.getTime() + 86400000
  }
}

// 监听开始日期变化
watch(() => startDate.value, (val) => {
  if (!val) {
    endDateDisabled.value = true
    endDate.value = null
  } else {
    endDateDisabled.value = false
    emits('startChange', val)
  }
})

// 监听结束日期变化
watch(() => endDate.value, (val) => {
  if (val) {
    emits('endChange', {
      startDate: startDate.value,
      endDate: val
    })
  }
})
</script>

<style scoped>

</style>