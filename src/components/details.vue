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
      <cell title="清账人" :value="Form.handle_name"></cell>
      <cell title="清账时间" :value="Form.updated_at" v-if="show_updated_at"></cell>
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
        Form: {},
        show_updated_at: true
      }
    },
    methods: {
      getData: function () {
        // this.Form = this.$route.params.Form
        // 从localStorage取得要展示的list的index
        /*
        * 由于是spa页面，刷新会清掉所有数据，所以刷完后点击返回，所有的数据都会不见 TT
        **/
        this.index = localStorage.hmt_currentDataIndex
        let bills = JSON.parse(localStorage.hmt_formLists)
        this.Form = bills[this.index - 1]
        if (this.Form.check === '否') {
          this.show_updated_at = false
        } else {
          this.show_updated_at = true
        }
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
