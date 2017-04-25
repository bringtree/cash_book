<template>
  <div>
    <x-header>搜索账单</x-header>

    <group>
      <x-input v-model="username" placeholder="请输入要搜索的姓名"></x-input>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="getResults">搜索</x-button>
    </box>

    <group>
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToDetails(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

    <box gap="10px 10px" v-if="show">
      <x-button @click.native="getMore">点击加载更多</x-button>
    </box>

    <divider v-if="nodata">已无更多数据</divider>

    <toast v-model="check_submit" type="warn">请输入要搜索的姓名</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
  </div>
</template>


<script>
  import { Toast, Divider, CellBox, Cell, Box, XInput, XButton, Group, XHeader } from 'vux'

  export default {
    components: {
      Toast,
      Divider,
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
        formLists: [],
        // 点击加载更多的按钮的显示
        show: false,
        // 当前页面数据的条数
        count: 0,
        // 是否显示divider(无更多数据)
        nodata: false,
        // 检验信息是否完整
        check_submit: false
      }
    },
    methods: {
      goToDetails: function (index, Form) {
        this.$router.push({name: 'details', params: {index: index, Form: Form}})
      },
      getResults: function () {
        const _this = this
        var username = this.username
        if (this.username) {
          this.check_submit = false
          this.$http.post('/bills/searchBill', username)
          .then(function (res) {
            if (res.data.type === 'success') {
              _this.success = true
              _this.error = false
              _this.msg = res.data.message
              // 取得返回的data存进localStorage
              localStorage.hmt_formLists = JSON.stringify(res.data.data)
            }
            // 这是取得数据后展示的初始数据(一般为10条)
            let bills = JSON.parse(localStorage.hmt_formLists)
            for (let i = 0; i < 10; i++) {
              if (bills[i] != null) {
                _this.formLists.push(bills[i])
                _this.count = i + 1
              } else {
                // 如果数据不满10条时显示
                _this.nodata = true
                break
              }
            }
            // 数据满10条时显示
            if (_this.formLists.length === 10) {
              _this.show = true
            }
          })
          .catch(function () {
            _this.success = false
            _this.error = true
            _this.msg = '请检查网络'
          })
        } else {
          this.check_submit = true
        }
      },
      // 点击加载更多的时候执行
      getMore: function () {
        let bills = JSON.parse(localStorage.hmt_formLists)
        // 取得当前页面数据的总数
        let count = this.count
        // 设置要增加的数据的条数
        let endCount = this.count + 10
        for (let i = count; i < endCount; i++) {
          if (bills[i] != null) {
            this.formLists.push(bills[i])
            this.count = i + 1
          } else {
            // 数据完全加载完后显示
            this.nodata = true
            this.show = false
            break
          }
        }
      },
      initData: function () {
        this.username = ''
        this.formLists = []
        this.count = 0
        this.nodata = false
        this.show = false
      }
    },
    beforeRouteEnter: (to, from, next) => {
      // from指的是离开的路由
      // 判断是从/home/menu进去就initData
      if (from.fullPath === '/home/menu') {
        next(vm => {
          vm.initData()
        })
      } else {
        next()
      }
    }
  }
</script>


<style scoped>

</style>
