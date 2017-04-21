<template>
  <div>
    <x-header>管理员-清账</x-header>

    <group title="起始时间">
      <datetime title="选择时间" v-model="Form.startDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <group title="终止时间">
      <datetime title="选择时间" v-model="Form.endDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <box gap="10px 10px">
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <x-button type="primary">搜索</x-button>
          </div>
        </flexbox-item>

        <flexbox-item>
          <div class="flex-demo">
            <x-button type="primary">搜索全部</x-button>
          </div>
        </flexbox-item>
      </flexbox>
    </box>
    

    <group>
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToDetails(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

  </div>
</template>


<script>
  import { Box, Flexbox, FlexboxItem, CellBox, Cell, XButton, Datetime, Group, XHeader } from 'vux'
  
  export default {
    components: {
      Box,
      Flexbox,
      FlexboxItem,
      CellBox,
      Cell,
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
      change (value) {
        console.log('change', value)
      },
      goToDetails: function (index, Form) {
        this.$router.push({ path: 'details', query: { index: index, Form: Form } })
      }
    }
  }
</script>


<style lang="less">


.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
