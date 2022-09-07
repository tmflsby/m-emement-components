<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select
      style="margin: 0 10px;"
      clearable
      :disabled="!province"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

 interface AreaItem {
  name: string,
  code: string,
  children?: AreaItem[]
}

 interface Data {
  name: string,
  code: string
}

// 下拉框选择省份的值
let province = ref<string>('')
// 下拉框选择城市的值
let city = ref<string>('')
// 下拉框选择区域的值
let area = ref<string>('')
// 所有的省市区数据
let areas = ref<AreaItem[]>(allAreas)
// 城市下拉框的数据
let selectCity = ref<AreaItem[]>([])
// 区域下拉框的数据
let selectArea = ref<AreaItem[]>([])

// 分发事件给父组件
let emits = defineEmits(['change'])

// 监听省份的值
watch(() => province.value, val => {
  if (val) {
    let cities = areas.value.find(item => item.code === val)?.children
    selectCity.value = cities || []
  }
  city.value = ''
  area.value = ''
})

// 监听城市的值
watch(() => city.value, val => {
  if (val) {
    let areas = selectCity.value.find(item => item.code === val)?.children
    selectArea.value = areas || []
  }
  area.value = ''
})

// 监听区域的值
watch(() => area.value, val => {
  if (val) {
    let provinceData: Data = {
      code: province.value,
      name: province.value && allAreas.find(item => item.code === province.value)?.name || ''
    }
    let cityData: Data = {
      code: city.value,
      name: city.value && selectCity.value.find(item => item.code === city.value)?.name || ''
    }
    let areaData: Data = {
      code: area.value,
      name: area.value && selectArea.value.find(item => item.code === area.value)?.name || ''
    }
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})
</script>

<style scoped>

</style>