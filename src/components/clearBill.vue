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
      <cell title="清账时间" :value="Form.updated_at" v-if="show_updated_at"></cell>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="goToModify" v-if="check_if_allow_clear">点击清账</x-button>
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
        index: '',
        // 判断已经清账的才会显示清账时间
        show_updated_at: true,
        // 判断未清账的才会显示清账按钮
        check_if_allow_clear: true
      }
    },
    methods: {
      goToModify: function () {
        this.$router.push({name: 'modify', params: { index: this.index, Form: this.Form }})
      },
      getData: function () {
        // this.index = this.$route.params.index
        // 从localStorage取得要展示的list的index
        /*
        * 由于是spa页面，刷新会清掉所有数据，所以刷完后点击返回，所有的数据都会不见 TT
        **/
        this.index = localStorage.hmt_currentDataIndex
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
        if (this.Form.check === '否') {
          this.show_updated_at = false
          this.check_if_allow_clear = true
        } else {
          this.show_updated_at = true
          this.check_if_allow_clear = false
        }
      },
      updateData: function () {
        this.index = localStorage.hmt_currentDataIndex
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
        if (this.Form.check === '否') {
          this.show_updated_at = false
          this.check_if_allow_clear = true
        } else {
          this.show_updated_at = true
          this.check_if_allow_clear = false
        }
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
