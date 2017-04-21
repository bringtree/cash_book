<template>
  <div>
    <group>
      <x-input title="登录" v-model="form.username" required></x-input>
      <x-input title="密码" type="password" v-model="form.password" required></x-input>
      <x-input title="验证码" v-model="form.authCode" :min="4" :max="4" required>
        <img slot="right" class="weui-vcode-img" :src="authCodeSrc" @click.native="updateAuthCode">
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
        authCodeSrc: '',
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
        this.$http.post('/auth/login', form)
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
      },
      updateAuthCode () {
        const that = this
        this.$http.get('/auth/getAuthCode')
          .then(function (res) {
            that.authCodeSrc = res.data.url;
          })
          .catch(function () {
            that.error = true
            that.success = false
            that.msg = '请检查网络'
          })
      }
    },
    watch: {
      form: {
        // 用于判断用户是否按照要求输入 若有的话 按钮可点击
        handler: function (value) {
          this.loginBtn = !((value.username.length > 0) &&
          (value.password.length > 0) &&
          (value.authCode.length === 4))
        },
        deep: true
      }
    },
    mounted: function () {
      const that = this
      this.$http.get('/auth/getAuthCode')
        .then(function (res) {
          that.authCodeSrc = res.data.url;
        })
        .catch(function () {
          that.error = true
          that.success = false
          that.msg = '请检查网络'
        })
    }
  }
</script>

<style scoped>

</style>
