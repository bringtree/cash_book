<template>
  <div>
    <x-header>管理员-清账</x-header>

    <group title="起始时间">
      <datetime title="选择时间" v-model="Form.startDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <group title="终止时间">
      <datetime title="选择时间" v-model="Form.endDateTime" format="YYYY-MM-DD HH:mm" @on-change="change"></datetime>
    </group>

    <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <x-button type="primary">搜索</x-button>
        </div>
      </flexbox-item>

      <flexbox-item>
        <div class="flex-demo">
          <x-button type="primary">搜索全部</x-button>
        </div>
      </flexbox-item>
    </flexbox>
    

    <group>
      <cell title="Total" value="￥1024"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>


<script>
  import { Flexbox, FlexboxItem, CellFormPreview, Cell, XButton, Datetime, Group, XHeader } from 'vux'
  
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      CellFormPreview,
      Cell,
      XButton,
      Group,
      XHeader,
      Datetime
    },
    data () {
      return {
        Form: {
          startDateTime: '',
          endDateTime: ''
        },
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }]
      }
    },
    methods: {
      change (value) {
        console.log('change', value)
      }
    }
  }
</script>


<style lang="less">
@import '~vux/src/styles/1px.less';

.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
