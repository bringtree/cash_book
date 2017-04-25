<template>
  <div>
    <x-header>添加账单<a slot="right" @click="saveBill">保存</a></x-header>

    <group title="内容">
      <x-textarea v-model="Form.content" :max="50" placeholder="请输入详细内容" :show-counter="true" :height="75" :rows="6"
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
      <x-input v-model="Form.money" type="number" placeholder="请输入金额"></x-input>
    </group>

    <toast v-model="check_submit" type="warn">请完善账单</toast>
    <toast v-model="success">{{msg}}</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
  </div>
</template>


<script>
  import { Toast, Datetime, Selector, XInput, XTextarea, Group, XHeader } from 'vux'

  export default {
    components: {
      Toast,
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
        msg: '',
        check_submit: false
      }
    },
    methods: {
      saveBill: function () {
        var Form = this.Form
        // 取得当前的this，方便在回调函数中使用
        const _this = this
        // 判断表单信息是否全部填写
        if (Form.content && Form.username && Form.type && Form.created_at && Form.money) {
          this.check_submit = false
          this.$http.post('/bills/addBill', Form)
            .then(function (res) {
              // console.log(res)
              if (res.data.type === 'success') {
                _this.success = true
                _this.error = false
                _this.msg = res.data.message
                // 增加账单成功后清除页面数据
                _this.clearPage()
              }
            })
            .catch(function () {
              _this.success = false
              _this.error = true
              _this.msg = '请检查网络'
            })
        } else {
          // 表单中有信息未完善但点击提交时触发
          this.check_submit = true
        }
      },
      clearPage: function () {
        this.Form.content = ''
        this.Form.username = ''
        this.Form.type = ''
        this.Form.created_at = ''
        this.Form.money = ''
      }
    },
    beforeRouteEnter: (to, from, next) => {
      // from指的是离开的路由
      next(vm => {
        vm.clearPage()
      })
    }
  }
</script>


<style scoped>

</style>
