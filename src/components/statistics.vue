<template>
  <div>
    <x-header>统计账单</x-header>

    <group title="起始时间">
      <datetime title="选择时间" v-model="Form.startDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <group title="终止时间">
      <datetime title="选择时间" v-model="Form.endDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <box gap="10px 10px">
      <x-button type="primary">搜索</x-button>
    </box>

    <group>
      <cell title="Total" value="￥1024"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>


<script>
  import { CellFormPreview, Cell, Box, XButton, Datetime, Group, XHeader } from 'vux'
  
  export default {
    components: {
      CellFormPreview,
      Cell,
      Box,
      XButton,
      Group,
      XHeader,
      Datetime
    },
    data () {
      return {
        Form: {
          startDateTime: '',
          endDateTime: ''
        },
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }]
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>


<style scoped>

</style>
