<template>
  <div>
    <x-header>管理员-清账</x-header>

    <group title="起始时间">
      <datetime title="选择时间" v-model="timeForm.startDateTime" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <group title="终止时间">
      <datetime title="选择时间" v-model="timeForm.endDateTime" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="getResults">搜索</x-button>
    </box>  

    <group>
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToClearBill(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

  </div>
</template>


<script>
  import { Box, CellBox, Cell, XButton, Datetime, Group, XHeader } from 'vux'
  
  export default {
    components: {
      Box,
      CellBox,
      Cell,
      XButton,
      Group,
      XHeader,
      Datetime
    },
    data () {
      return {
        timeForm: {
          startDateTime: '',
          endDateTime: ''
        },
        success: false,
        error: false,
        msg: '',
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
      goToClearBill: function (index, Form) {
        this.$router.push({ path: 'clearBill', query: { index: index, Form: Form } })
      },
      getResults: function () {
        const _this = this
        var timeForm = this.timeForm
        this.$http.post('/bills/getBills', timeForm)
          .then(function (res) {
            if (res.data.type === 'success') {
              _this.success = true
              _this.error = false
              _this.msg = res.data.message
              _this.formLists = res.data.data
            }
          })
          .catch(function () {
            _this.success = false
            _this.error = true
            _this.msg = '请检查网络'
          })
      }
    }
  }
</script>


<style lang="less">

</style>
