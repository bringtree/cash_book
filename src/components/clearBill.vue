<template>
  <div>
    <x-header>清账详情</x-header>

    <group>
      <cell title="内容" :value="Form.content"></cell>
      <cell title="记账人" :value="Form.username"></cell>
      <cell title="类型" :value="Form.type"></cell>
      <cell title="记账时间" :value="Form.created_at"></cell>
      <cell title="金额" :value="Form.money"></cell>
      <cell title="是否清账" :value="Form.check"></cell>
      <cell title="清账方式" :value="Form.handle_way"></cell>
      <cell title="清账人" :value="Form.handle_name"></cell>
      <cell title="清账时间" :value="Form.updated_at"></cell>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="goToModify">点击清账</x-button>
    </box>
  </div>
</template>


<script>
  import { Box, XButton, Cell, XHeader, Group } from 'vux'

  export default {
    components: {
      Box,
      XButton,
      Cell,
      XHeader,
      Group
    },
    data () {
      return {
        Form: {},
        index: ''
      }
    },
    methods: {
      goToModify: function () {
        this.$router.push({name: 'modify', params: { index: this.index, Form: this.Form }})
      },
      getData: function () {
        this.index = this.$route.params.index
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
      },
      updateData: function () {
        this.index = JSON.parse(localStorage.hmt_changeDataIndex)
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
      }
    },
    beforeRouteEnter: (to, from, next) => {
      // console.log(from)
      if (from.fullPath === '/modify') {
        next(vm => {
          vm.updateData()
        })
      } else {
        next(vm => {
          vm.getData()
        })
      }
    }
  }
</script>


<style scoped>
  
</style>
