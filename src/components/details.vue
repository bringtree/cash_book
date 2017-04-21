<template>
  <div>
    <x-header>账单详情</x-header>

    <group>
      <cell title="内容" :value="this.$route.query.Form.content"></cell>
      <cell title="记账人" :value="this.$route.query.Form.username"></cell>
      <cell title="类型" :value="this.$route.query.Form.type"></cell>
      <cell title="记账时间" :value="this.$route.query.Form.created_at"></cell>
      <cell title="金额" :value="this.$route.query.Form.money"></cell>
      <cell title="是否清账" :value="this.$route.query.Form.check"></cell>
      <cell title="清账方式" :value="this.$route.query.Form.handle_way"></cell>
      <cell title="清账内容" :value="this.$route.query.Form.handle_name"></cell>
    </group>
  </div>
</template>


<script>
  import { Cell, XHeader, Group } from 'vux'

  export default {
    components: {
      Cell,
      XHeader,
      Group
    },
    data () {
      return {
        content: '12314'
      }
    },
    methods: {
    }
  }
</script>


<style scoped>
  
</style>
