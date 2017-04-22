<template>
  <div>
    <x-header>添加账单<a slot="right">保存</a></x-header>

    <group title="内容">
      <x-textarea v-model="Form.content" :max="30" placeholder="请输入详细内容" :show-counter="true" :height="50" :rows="6"
                  :cols="30"></x-textarea>
    </group>

    <group title="经手人">
      <x-input v-model="Form.handlerName" placeholder="请输入经手人姓名" required></x-input>
    </group>

    <group title="类型">
      <selector v-model="Form.type" placeholder="请选择类型" :options="list"></selector>
    </group>

    <group title="时间">
      <datetime title="选择时间" v-model="Form.dateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <group title="金额">
      <x-input v-model="Form.money" placeholder="请输入金额" required></x-input>
    </group>
  </div>
</template>


<script>
  import { Datetime, Selector, XInput, XTextarea, Group, XHeader } from 'vux'

  export default {
    components: {
      Datetime,
      XInput,
      XTextarea,
      Group,
      XHeader,
      Selector
    },
    data () {
      return {
        Form: {
          content: '',
          handlerName: '',
          type: '',
          dateTime: '',
          money: ''
        },
        list: [{key: '收入', value: '收入'}, {key: '支出', value: '支出'}]
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>


<style scoped>

</style>
