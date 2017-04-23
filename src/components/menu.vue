<template>
  <div class="grid-center">
    <grid :rows="2">
      <grid-item link="/addBill">
        <img slot="icon" src="../assets/images/add.png">
        <span slot="label">添加账单</span>
      </grid-item>
      <grid-item link="/search">
        <img slot="icon" src="../assets/images/search.png">
        <span slot="label">搜索账单</span>
      </grid-item>
      <grid-item link="/statistics">
        <img slot="icon" src="../assets/images/statistics.png">
        <span slot="label">统计账单</span>
      </grid-item>
      <grid-item link="/admin">
        <img slot="icon" src="../assets/images/admin.png">
        <span slot="label">管理员</span>
      </grid-item>
      <grid-item @click.native="logout">
        <img slot="icon" src="../assets/images/loginout.png">
        <span slot="label">登出</span>
      </grid-item>
    </grid>
    <toast v-model="success">{{msg}}</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import router from '../router/index'
  import { Grid, GridItem, GroupTitle, Toast } from 'vux'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Toast
    },
    data () {
      return {
        success: false,
        error: false,
        msg: ''
      }
    },
    methods: {
      logout () {
        const that = this
        this.$http.get('/auth/logout')
          .then(function (res) {
            if (res.data.type === 'success') {
              router.push('/login')
            }
          })
          .catch(function () {
            that.error = true
            that.success = false
            console.log('登出失败')
          })
      }
    }
  }
</script>

<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
