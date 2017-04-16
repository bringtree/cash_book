/**
 * Created by huangpeisong on 2017/4/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  modules: {
    mutations
  },
  actions
})

// 关于 这个vuex
// 我仍然用不好，可以的话帮我改下
// 先说下 现在的目录情况
//
// user.js 放置着用户信息，是一个store
// actions.js 放置着去触发mutation的方法
// mutations.js放置着直接能改变store的方法
// getters.js放置着页面拿取store数据的方法
// types放置着mutation方法的名字
//
// 逻辑是这样子恩
// menu 上有个mapGetters 里面有个getName 然后 会去触发getters.js里面的getName 来拿到store的username数据
// 然后 methods 里面有个mapActions 里面有个import Name 点击触发后回去触发actions.js 的commit函数(他会去types里面找到这个函数名)，然后 这个函数触发mutations.
//   最后mutations 修改store，相应的页面上的数据也会发生变化。
//
// main.js 注册(不知道是不是这样叫) 了store目录里的index.js
