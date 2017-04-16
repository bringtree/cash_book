<template>
  <div>
    <group>
      <x-input title="登录" v-model="form.username" required></x-input>
      <x-input title="密码" type="password" v-model="form.password" required></x-input>
      <x-input title="验证码" v-model="form.authCode" :min="4" :max="4" required>
        <img slot="right" class="weui-vcode-img" :src="authCodeSrc">
      </x-input>
    </group>
    <toast v-model="success">{{msg}}</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
    <flexbox>
      <flexbox-item>
        <x-button type="primary" @click.native="login" :disabled="loginBtn"> 登录</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" @click.native="goRegister"> 注册</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script type="text/ecmascript-6">
  import router from '../router/index'
  import { XInput, Group, Flexbox, FlexboxItem, XButton, Toast } from 'vux'

  export default{
    components: {
      XInput,
      Group,
      Flexbox,
      FlexboxItem,
      XButton,
      Toast
    },
    data () {
      return {
        form: {
          username: '',
          password: '',
          authCode: ''
        },
        authCodeSrc: 'http://weui.github.io/weui/images/vcode.jpg',
        loginBtn: true,
        success: false,
        error: false,
        msg: ''
      }
    },
    methods: {
      login: function () {
        var form = this.form
        const that = this
        // ajax地址没给
        this.$http.post('/api/log', form)
          .then(function (res) {
            if (res.data.type === 'success') {
              that.success = true
              that.error = false
              that.msg = res.data.message
              router.push('home/menu')
            } else {
              that.error = true
              that.success = false
              that.msg = res.data.message
            }
          })
          .catch(function () {
            that.error = true
            that.success = false
            that.msg = '请检查网络'
          })
      },
      goRegister () {
        router.push('register')
      }
    },
    watch: {
      form: {
        handler: function (value) {
          if ((value.username.length > 0) &&
            (value.password.length > 0) &&
            (value.authCode.length === 4)) {
            this.loginBtn = false
          } else {
            this.loginBtn = true
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
