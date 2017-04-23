<template>
  <div>
    <x-header>搜索账单</x-header>

    <group>
      <x-input v-model="username" placeholder="请输入要搜索的姓名" required></x-input>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="getResults">搜索</x-button>
    </box>

    <group>
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToDetails(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

  </div>
</template>


<script>
  import { CellBox, Cell, Box, XInput, XButton, Group, XHeader } from 'vux'

  export default {
    components: {
      CellBox,
      Cell,
      Box,
      XInput,
      XButton,
      Group,
      XHeader
    },
    data () {
      return {
        username: '',
        success: false,
        error: false,
        msg: '',
        formLists: []
      }
    },
    methods: {
      goToDetails: function (index, Form) {
        this.$router.push({ name: 'details', params: { index: index, Form: Form } })
      },
      getResults: function () {
        const _this = this
        var username = this.username
        this.$http.post('/bills/searchBill', username)
          .then(function (res) {
            if (res.data.type === 'success') {
              _this.success = true
              _this.error = false
              _this.msg = res.data.message
              _this.formLists = res.data.data
            }
          })
          .catch(function () {
            _this.success = false
            _this.error = true
            _this.msg = '请检查网络'
          })
      }
    }
  }
</script>


<style scoped>

</style>
