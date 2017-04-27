<template>
  <div>
    <x-header>清账</x-header>

    <group title="是否清账">
      <selector v-model="Form.check" placeholder="请选择是否清账" :options="list"></selector>
    </group>

    <group title="清账方式">
      <selector v-model="Form.handle_way" placeholder="请选择清账方式" :options="list_type"></selector>
    </group>

    <group title="清账人">
      <x-input v-model="Form.handle_name" placeholder="请输入清账人姓名"></x-input>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="submitData">保存</x-button>
    </box>

    <toast v-model="check_submit" type="warn">请完善清账信息</toast>
    <toast v-model="success">{{msg}}</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
  </div>
</template>


<script>
  import { dateFormat, Toast, Selector, XInput, Group, Box, XButton, XHeader } from 'vux'

  export default {
    components: {
      Toast,
      Selector,
      XInput,
      Group,
      Box,
      XButton,
      XHeader
    },
    data () {
      return {
        Form: {},
        index: '',
        success: false,
        error: false,
        msg: '',
        check_submit: false,
        list: [{key: '是', value: '是'}, {key: '否', value: '否'}],
        list_type: [{key: '支付宝', value: '支付宝'}, {key: '微信', value: '微信'}, {key: '银行卡', value: '银行卡'}, {key: '现金', value: '现金'}, {key: '无', value: '无'}]
      }
    },
    methods: {
      submitData: function () {
        // 在这里自动获取当前时间赋给updated_at，不给用户自己选择
        this.Form.updated_at = dateFormat(new Date(), 'YYYY-MM-DD HH:mm')
        let Form = this.Form
        const _this = this
        if (Form.check && Form.handle_way && Form.handle_name) {
          // 之前挖的坑，写的api有问题，导致只能再加一层
          // 可以改掉了=.=，人生污点
          // this.changeDatas.push(Form)
          if ((Form.check !== '否') && (Form.handle_way !== '无') && (Form.handle_name !== '无')) {
            this.check_submit = false
            this.$http.post('/bills/clearBill', Form)
            .then(function (res) {
              if (res.data.type === 'success') {
                _this.success = true
                _this.error = false
                _this.msg = res.data.message
                // 清账成功才会修改数据
                _this.editStorage()
                // 在这里加上跳转
                setTimeout(function () {
                  _this.$router.push({ path: '/admin' })
                }, 2000)
              } else {
                _this.success = false
                _this.error = true
                _this.msg = res.data.message
              }
            })
            .catch(function () {
              _this.success = false
              _this.error = true
              _this.msg = '请检查网络'
            })
          } else {
            // 账单未选择清账不允许提交
            this.check_submit = true
          }
        } else {
          // 表单中有信息未完善但点击提交时触发
          this.check_submit = true
        }
      },
      getData: function () {
        this.index = this.$route.params.index
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
      },
      editStorage: function () {
        // 修改清账完后的数据，与localStorage的数据同步
        localStorage.hmt_changeData = JSON.stringify(this.Form)
        let bills = JSON.parse(localStorage.hmt_formLists)
        bills[this.index - 1].check = this.Form.check
        bills[this.index - 1].handle_way = this.Form.handle_way
        bills[this.index - 1].handle_name = this.Form.handle_name
        bills[this.index - 1].updated_at = this.Form.updated_at
        localStorage.hmt_formLists = JSON.stringify(bills)
        localStorage.hmt_changeDataIndex = this.index
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.getData()
      })
    }
  }
</script>


<style scoped>

</style>
