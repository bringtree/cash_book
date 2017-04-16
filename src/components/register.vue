<template>
  <div>
    <group title="注册">
      <x-input title="用户名" type="text" v-model="form.username" placeholder="请输入用户名" required></x-input>
      <x-input title="密码" type="password" v-model="form.password" placeholder="输入长度不小于6，不大于20" :min="6" :max="20"
               required></x-input>
      <x-input title="确认密码" v-model="form.password2" type="password" placeholder="重复上面输入" :min="6" :max="20"
               :equal-with="form.password"
               required></x-input>
      <x-input title="邮箱" name="email" v-model="form.mail" placeholder="请输入邮箱地址" is-type="email" required></x-input>
      <x-input title="邀请码" name="invitationCode" v-model="form.invitationCode" placeholder="请输入16位的邀请码" :min="16"
               :max="16"
               required></x-input>
    </group>
    <toast v-model="success" type="text">{{2}}</toast>
    // 成功~~~~~~~~~~~~~
    <toast v-model="error" type="warn">{{1}}</toast>
    // 失败~~~~~~~~~~~~~~~~~~~~~
    <flexbox>
      <flexbox-item>
        <x-button @click.native="register" type="primary" :disabled="registerBtn"> 注册</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" @click.native="reset"> 重置</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { XInput, Group, Alert, XButton, FlexboxItem, Flexbox, ToastPlugin, Toast } from 'vux'

  export default {
    components: {
      XInput,
      Group,
      Alert,
      XButton,
      FlexboxItem,
      Flexbox,
      ToastPlugin,
      Toast
    },
    data () {
      return {
        form: {
          'username': '',
          'password': '',
          'password2': '',
          'mail': '',
          'invitationCode': ''
        },
        content: 'aaaa',
        registerBtn: true, // 按钮是否可以点击
        error: false,
        success: false
      }
    },
    methods: {
      reset () {
        this.form = {
          'username': '',
          'password': '',
          'password2': '',
          'mail': '',
          'invitationCode': ''
        }
        this.error = !this.error
      },
      // 这边ajax还没写
      register () {
        let form = this.form
        this.$http.post('XXXXXXXX', form)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (err) {
            console.log(err)
          })
        console.log(form)
      }
    },
    watch: {
      // 用来计算那个登录按钮给不给点击，根据上面表格完成情况
      form: {
        // 这里有个this的问题 不要改成箭头函数
        handler: function (value) {
          if ((value.password === value.password2) &&
            (value.password.length > 0) &&
            (value.username.length > 0) &&
            (value.invitationCode.length === 16)
          ) {
            this.registerBtn = false
          } else {
            this.registerBtn = true
          }
        },
        deep: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
