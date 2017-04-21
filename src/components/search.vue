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
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToDetails(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

  </div>
</template>


<script>
  import { CellBox, Cell, Box, XInput, XButton, Group, XHeader } from 'vux'

  export default {
    components: {
      CellBox,
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
        formLists: [
          {
            id: '1',
            index: '1',
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
            id: '10',
            index: '2',
            content: '拉赞助',
            username: 'A',
            type: '收入',
            created_at: '2017-04-18 16:09',
            money: '1000',
            check: '是',
            handle_way: '支付宝',
            handle_name: 'W'
          }
        ]

      }
    },
    methods: {
      goToDetails: function (index, Form) {
        this.$router.push({ path: 'details', query: { index: index, Form: Form } })
      }
    }
  }
</script>


<style scoped>

</style>
