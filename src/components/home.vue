<template>
  <div>
    <!--<div>-->
    <!--{{getName}}-->
    <!--</div>-->
    <div>
      <router-view></router-view>
    </div>
    <tabbar>
      <tabbar-item selected link="/home/menu">
        <img slot="icon" src="../assets/images/menu.png">
        <span slot="label">菜单</span>
      </tabbar-item>
      <tabbar-item link="/home/personalcenter">
        <img slot="icon" src="../assets/images/personalCenter.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  import { mapGetters } from 'vuex'

  export default{
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    computed: mapGetters([
      'getName'
    ]),
    methods: {},
    mounted: function () {
      this.$store.dispatch('importName', 'xiaohong')
    }

  }
</script>

<style scoped>

</style>
