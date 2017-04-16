<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <tabbar>
      <tabbar-item selected link="/home/menu">
        <img slot="icon" src="../assets/images/menu.png">
        <span slot="label">菜单</span>
      </tabbar-item>
      <toast v-model="error" type="warn">导入信息失败</toast>
      <tabbar-item link="/home/personalcenter">
        <img slot="icon" src="../assets/images/personalCenter.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, Toast } from 'vux'
  import { mapGetters } from 'vuex'
  import router from '../router/index'
  export default{
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Toast
    },
    data () {
      return {
        error: false
      }
    },
    computed: mapGetters([
      'getName'
    ]),
    methods: {},
    mounted: function () {
      const that = this
      this.$http.get('/api/info')
        .then(function (res) {
          if (res.data.type === 'success') {
            let info = res.data.message
            info = JSON.parse(info)
            that.$store.dispatch('importName', info)
          } else {
            that.error = true
            router.push('/login')
          }
        })
        .catch(function (err) {
          console.log(err)
          that.error = true
          router.push('/login')
        })
    }
  }
</script>

<style scoped>

</style>
