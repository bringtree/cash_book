<template>
  <div>
    <x-header>搜索账单</x-header>

    <group>
      <x-input v-model="handlerName" placeholder="请输入要搜索的姓名" required></x-input>
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
  import { CellFormPreview, Cell, Box, XInput, XButton, Group, XHeader } from 'vux'

  export default {
    components: {
      CellFormPreview,
      Cell,
      Box,
      XInput,
      XButton,
      Group,
      XHeader
    },
    data () {
      return {
        handlerName: '',

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
    }
  }
</script>


<style scoped>

</style>
