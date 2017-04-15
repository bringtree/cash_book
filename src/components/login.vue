<template>
  <div>
    <group>
      <x-input title="登录" v-model="form.username" required></x-input>
      <x-input title="密码" type="password" v-model="form.password" required></x-input>
      <x-input title="验证码" v-model="form.authCode" :min="4" :max="4" required>
        <img slot="right" class="weui-vcode-img" :src="authCodeSrc">
      </x-input>
    </group>
    <toast v-model="success" type="text">{{2}}</toast>
    // 成功~~~~~~~~~~~~~
    <toast v-model="error" type="warn">{{1}}</toast>
    // 失败~~~~~~~~~~~~~~~~~~~~~
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
        error: false
      }
    },
    methods: {
      login: function () {
        var form = this.form
        console.log(form)
      },
      goRegister () {
        console.log('gogogogo')
        // 路由之后确定再写
      },
      error () {
        console.log('a')
      },
      success () {
        console.log('a')
      }
    },
    watch: {
      form: {
        handler: function (value) {
          if ((value.username.length > 0) &&
            (value.password.length > 0) &&
            (value.authCode.length === 4)) {
            this.loginBtn = false
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
