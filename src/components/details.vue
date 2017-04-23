<template>
  <div>
    <x-header>账单详情</x-header>

    <group>
      <cell title="内容" :value="Form.content"></cell>
      <cell title="记账人" :value="Form.username"></cell>
      <cell title="类型" :value="Form.type"></cell>
      <cell title="记账时间" :value="Form.created_at"></cell>
      <cell title="金额" :value="Form.money"></cell>
      <cell title="是否清账" :value="Form.check"></cell>
      <cell title="清账方式" :value="Form.handle_way"></cell>
      <cell title="清账内容" :value="Form.handle_name"></cell>
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
        Form: {}
      }
    },
    methods: {
      getData: function () {
        this.Form = this.$route.query.Form
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.getData()
      })
    }
  }
</script>


<style scoped>
  
</style>
