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

    <!--
    <div>
      <ul>
        <template v-for="list in formLists">
          <li>{{ list.content }}</li>
          <li>{{ list.handlerName }}</li>
          <li>{{ list.type }}</li>
          <li>{{ list.dateTime }}</li>
          <li>{{ list.money }}</li>
          <li>{{ list.isCheck }}</li>
          <li>{{ list.checkWay }}</li>
          <li>{{ list.auditor }}</li> 
        </template>
      </ul>
    </div>
    -->
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
        /*
        ,

        formLists: [
          {
            content: '买花',
            username: 'Z',
            type: '支出',
            created_at: '2017-04-19 16:09',
            money: '100',
            check: '否',
            handle_way: '无',
            handle_name: '无'
          },
          {
            content: '拉赞助',
            username: 'A',
            type: '收入',
            created_at: '2017-04-18 16:09',
            money: '1000',
            check: '是',
            handle_way: '拉到就好',
            handle_name: 'W'
          }
        ]
        */
      }
    },
    methods: {
    }
  }
</script>


<style scoped>

</style>
