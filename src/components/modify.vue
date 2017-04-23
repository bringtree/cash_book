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
      <x-input v-model="Form.handle_name" placeholder="请输入清账人姓名" required></x-input>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="submitData">保存</x-button>
    </box>
  </div>
</template>


<script>
  import { Selector, XInput, Group, Box, XButton, XHeader } from 'vux'

  export default {
    components: {
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
        success: false,
        error: false,
        msg: '',
        list: [{key: '是', value: '是'}, {key: '否', value: '否'}],
        list_type: [{key: '支付宝', value: '支付宝'}, {key: '微信', value: '微信'}, {key: '银行卡', value: '银行卡'}, {key: '现金', value: '现金'}]
      }
    },
    methods: {
      submitData: function () {
        console.log(this.Form)
        var Form = this.Form
        const _this = this
        this.$http.post('http://localhost/save.php', Form)
          .then(function (res) {
            console.log(res)
            if (res.data.type === 'success') {
              _this.success = true
              _this.error = false
              _this.msg = res.data.message
              // 缺少清账完的跳转
            }
          })
          .catch(function () {
            _this.success = false
            _this.error = true
            _this.msg = '请检查网络'
          })
      }
    },
    mounted: function () {
      // 将详细信息传过来后放到这个Form
      this.Form = this.$route.query.Form
    }
  }
</script>


<style scoped>
  
</style>
