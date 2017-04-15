<template>
  <div>
    <group>
      <x-input title="登录" v-model="username" required></x-input>
      <x-input title="密码" type="password" v-model="password" required></x-input>
      <x-input title="验证码" v-model="authCode" :min="4" :max="4" required>
        <img slot="right" class="weui-vcode-img" :src="authCodeSrc">
      </x-input>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="primary"> 登录</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary"> 注册</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XInput, Group, Flexbox, FlexboxItem, XButton } from 'vux'

  export default{
    components: {
      XInput,
      Group,
      Flexbox,
      FlexboxItem,
      XButton
    },
    data () {
      return {
        username: '',
        password: '',
        authCode: '',
        authCodeSrc: 'http://weui.github.io/weui/images/vcode.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
