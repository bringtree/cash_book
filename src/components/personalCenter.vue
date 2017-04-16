<template>
  <div>
    <cell title="用户名" :value="getName"></cell>
    <group title="修改密码">
      <x-input title="密码" type="password" v-model="form.password" placeholder="输入长度不小于6，不大于20" :min="6" :max="20"
               required></x-input>
      <x-input title="确认密码" v-model="form.password2" type="password" placeholder="重复上面输入" :min="6" :max="20"
               :equal-with="form.password"
               required>
      </x-input>
    </group>
    <toast v-model="success" type="text">{{2}}</toast>
    // 成功~~~~~~~~~~~~~
    <toast v-model="error" type="warn">{{1}}</toast>
    // 失败~~~~~~~~~~~~~~~~~~~~~
    <flexbox>
      <flexbox-item>
        <x-button @click.native="modify" type="primary" :disabled="modifyBtn"> 修改</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" @click.native="logout"> 注销</x-button>
      </flexbox-item>
    </flexbox>

    <group title="管理员功能" v-show="getAdmin">
      <x-input title="邀请码" name="invitationCode" v-model="form.invitationCode" :min="16"
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
          'password': '',
          'password2': '',
          'invitationCode': ''
        },
        modifyBtn: true, // 按钮是否可以点击
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
      },
      produce () {
        this.$http.get('XXXXXXXX')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      logout () {
        this.$http.get('XXXXXXXX')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    watch: {
      // 用来计算那个登录按钮给不给点击，根据上面表格完成情况
      form: {
        // 这里有个this的问题 不要改成箭头函数
        handler: function (value) {
          if ((value.password === value.password2) &&
            (value.password.length > 0)
          ) {
            this.modifyBtn = false
          } else {
            this.modifyBtn = true
          }
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
