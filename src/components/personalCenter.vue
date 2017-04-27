<template>
  <div>
    <cell title="用户名" :value="getName"></cell>
    <group title="修改密码">
      <x-input title="原始密码" type="password" v-model="form.oldPassword" placeholder="输入长度不小于6，不大于20" :min="6" :max="20"
               required></x-input>
      <x-input title="密码" type="password" v-model="form.password" placeholder="输入长度不小于6，不大于20" :min="6" :max="20"
               required></x-input>
      <x-input title="确认密码" v-model="form.password2" type="password" placeholder="重复上面输入" :min="6" :max="20"
               :equal-with="form.password"
               required>
      </x-input>
    </group>
    <toast v-model="success" type="text">{{msg}}</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
    <flexbox>
      <flexbox-item>
        <x-button @click.native="modify" type="primary" :disabled="modifyBtn"> 修改</x-button>
      </flexbox-item>
    </flexbox>
    <group title="管理员功能" v-show="getAdmin!='false'">
      <x-input title="邀请码" name="invitationCode" v-model="invitationCode" :min="16"
               :max="16"
      ></x-input>
      <x-button @click.native="produce" type="primary"> 生成</x-button>
    </group>

  </div>
</template>


<script>
  import { XInput, Group, Alert, XButton, FlexboxItem, Flexbox, ToastPlugin, Toast, Cell } from 'vux'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      XInput,
      Group,
      Alert,
      XButton,
      FlexboxItem,
      Flexbox,
      ToastPlugin,
      Toast,
      Cell
    },
    data () {
      return {
        form: {
          'oldPassword': '',
          'password': '',
          'password2': ''
        },
        modifyBtn: true, // 按钮是否可以点击
        error: false,
        success: false,
        invitationCode: '',
        msg: '',
        power: ''
      }
    },
    methods: {
      reset () {
        this.form = {
          'username': '',
          'oldPassword': '',
          'password': '',
          'password2': '',
          'mail': '',
          'invitationCode': ''
        }
        this.error = !this.error
      },
      produce () {
        const that = this
        this.$http.get('/api/invitationCode')
          .then(function (res) {
            if (res.data.type === 'success') {
              that.success = false
              that.error = false
              that.invitationCode = res.data.message
              that.msg = ''
            } else {
              that.success = false
              that.error = true
              that.msg = res.data.message
            }
          })
          .catch(function () {
            that.success = false
            that.error = true
            that.msg = '网络故障'
          })
      },
      modify () {
        const that = this
        this.$http.post('/auth/modifyPassword', that.form)
          .then(function (res) {
            if (res.data.type === 'success') {
              that.success = true
              that.error = false
              that.msg = res.data.message
            } else {
              that.success = false
              that.error = true
              that.msg = res.data.message
            }
          })
          .catch(function () {
            that.success = false
            that.error = true
            that.msg = '网络故障'
          })
      }
    },
    watch: {
      // 用来计算那个登录按钮给不给点击，根据上面表格完成情况
      form: {
        // 这里有个this的问题 不要改成箭头函数
        // 然后这里也是验证用户输入规范 按钮是否可以点击
        handler: function (value) {
          this.modifyBtn = !((value.password === value.password2) &&
          (value.password.length >= 6) && (value.oldPassword.length >= 6))
        },
        deep: true
      }
    },
    computed: mapGetters([
      'getName',
      'getAdmin'
    ])
  }
</script>


<style scoped>

</style>
