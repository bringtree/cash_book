<template>
  <div>
    <x-header>添加账单<a slot="right" @click="saveBill">保存</a></x-header>

    <group title="内容">
      <x-textarea v-model="Form.content" :max="30" placeholder="请输入详细内容" :show-counter="true" :height="50" :rows="6"
                  :cols="30"></x-textarea>
    </group>

    <group title="经手人">
      <x-input v-model="Form.username" placeholder="请输入经手人姓名"></x-input>
    </group>

    <group title="类型">
      <selector v-model="Form.type" placeholder="请选择类型" :options="list"></selector>
    </group>

    <group title="时间">
      <datetime title="选择时间" v-model="Form.created_at" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <group title="金额">
      <x-input v-model="Form.money" placeholder="请输入金额"></x-input>
    </group>
  </div>
</template>


<script>
  import { Datetime, Selector, XInput, XTextarea, Group, XHeader } from 'vux'

  export default {
    components: {
      Datetime,
      XInput,
      XTextarea,
      Group,
      XHeader,
      Selector
    },
    data () {
      return {
        Form: {
          content: '',
          username: '',
          type: '',
          created_at: '',
          money: '',
          check: '否',
          handle_way: '无',
          handle_name: '无'
        },
        list: [{key: '收入', value: '收入'}, {key: '支出', value: '支出'}],
        success: false,
        error: false,
        msg: ''
      }
    },
    methods: {
      saveBill: function () {
        var Form = this.Form
        const _this = this
        this.$http.post('http://localhost/addBill.php', Form)
          .then(function (res) {
            console.log(res)
            if (res.data.type === 'success') {
              _this.success = true
              _this.error = false
              _this.msg = res.data.message
              _this.clearPage()
            }
          })
          .catch(function () {
            _this.success = false
            _this.error = true
            _this.msg = '请检查网络'
          })
      },
      clearPage: function () {
        this.Form.content = ''
        this.Form.username = ''
        this.Form.type = ''
        this.Form.created_at = ''
        this.Form.money = ''
      }
    }
  }
</script>


<style scoped>

</style>
