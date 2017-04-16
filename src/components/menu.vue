<template>
  <div class="grid-center">
    <grid :rows="2">
      <grid-item link="/home/addBill">
        <img slot="icon" src="../assets/images/add.png">
        <span slot="label">添加账单</span>
      </grid-item>
      <grid-item link="/home/search">
        <img slot="icon" src="../assets/images/search.png">
        <span slot="label">搜索账单</span>
      </grid-item>
      <grid-item link="/home/statistics">
        <img slot="icon" src="../assets/images/statistics.png">
        <span slot="label">统计账单</span>
      </grid-item>
      <grid-item link="/home/admin">
        <img slot="icon" src="../assets/images/admin.png">
        <span slot="label">管理员</span>
      </grid-item>
      <grid-item @click.native = "logout">
        <img slot="icon" src="../assets/images/loginout.png">
        <span slot="label">登出</span>
      </grid-item>
    </grid>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick () {
        console.log('on item click')
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
