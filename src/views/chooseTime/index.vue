<template>
  <div>
    <div>
      <m-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></m-choose-time>
      <br />
      <br />
      <m-choose-date :disableToday="false" :startOptions="startOptions" @startChange="dateStartChange" @endChange="dateEndChange"></m-choose-date>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface endValue {
  startTime: string,
  endTime: string
}
interface dateEndValue {
  startDate: Date,
  endDate: Date
}

let startChange = (val: string) => {
  console.log('startChange', val)
}
let endChange = (val: string) => {
  console.log('endChange', val)
}
let dateStartChange = (val: Date) => {
  console.log('dateStartChange', val)
}
let dateEndChange = (val: Date) => {
  console.log('dateEndChange', val)
}
let startOptions = {
  // size: 'mini',
  // clearable: false
}
</script>

<style scoped>

</style>