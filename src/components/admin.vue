<template>
  <div>
    <x-header @on-click-back="goToMenu" :left-options="{preventGoBack: true}">管理员-清账</x-header>

    <group title="起始时间">
      <datetime title="选择时间" v-model="timeForm.beginDateTime" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <group title="终止时间">
      <datetime title="选择时间" v-model="timeForm.endDateTime" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <box gap="10px 10px">
      <x-button type="primary" @click.native="getResults">搜索</x-button>
    </box>  

    <group>
      <cell-box v-for="Form in formLists" :key="Form.index" is-link @click.native="goToClearBill(Form.index, Form)">
        {{ Form.username }} - {{ Form.created_at }}
      </cell-box>
    </group>

    <box gap="10px 10px" v-if="show">
      <x-button @click.native="getMore">点击加载更多</x-button>
    </box>

    <divider v-if="nodata">已无更多数据</divider>

    <toast v-model="check_time" type="warn">起始时间要小于终止时间</toast>
    <toast v-model="check_submit" type="warn">请输入要搜索的时间段</toast>
    <toast v-model="error" type="warn">{{msg}}</toast>
  </div>
</template>


<script>
  import { Toast, Divider, Box, CellBox, Cell, XButton, Datetime, Group, XHeader } from 'vux'
  
  export default {
    components: {
      Toast,
      Divider,
      Box,
      CellBox,
      Cell,
      XButton,
      Group,
      XHeader,
      Datetime
    },
    data () {
      return {
        timeForm: {
          beginDateTime: '',
          endDateTime: ''
        },
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
        check_submit: false,
        // 检验时间格式是否正确
        check_time: false
      }
    },
    methods: {
      goToClearBill: function (index, Form) {
        this.$router.push({ name: 'clearBill', params: { index: index, Form: Form } })
      },
      getResults: function () {
        const _this = this
        var timeForm = this.timeForm
        if (timeForm.beginDateTime && timeForm.endDateTime) {
          if (timeForm.beginDateTime < timeForm.endDateTime) {
            this.check_time = false
            this.check_submit = false
            this.$http.post('/bills/getBills', timeForm)
            .then(function (res) {
              if (res.data.type === 'success') {
                _this.success = true
                _this.error = false
                _this.msg = res.data.message
                // 取得返回的data存进localStorage
                // 返回已经是字符串了
                // localStorage.hmt_formLists = JSON.stringify(res.data.data)
                localStorage.hmt_formLists = res.data.data
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
                  // 数据满10条时显示
                  if (_this.formLists.length === 10) {
                    _this.show = true
                  }
                }
              } else {
                _this.success = false
                _this.error = true
                _this.msg = res.data.message
              }
            })
            .catch(function () {
              _this.success = false
              _this.error = true
              _this.msg = '请检查网络'
            })
          } else {
            this.check_time = true
          }
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
        this.timeForm.beginDateTime = ''
        this.timeForm.endDateTime = ''
        this.formLists = []
        this.count = 0
        this.nodata = false
        this.show = false
      },
      goToMenu: function () {
        this.$router.push({ path: '/home/menu' })
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


<style lang="less">

</style>
