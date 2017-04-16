/**
 * Created by huangpeisong on 2017/4/16.
 */
import {
  IMPORTINFO
} from './types'

import state from './user'
import getters from './getters'

const mutations = {
  [IMPORTINFO] (userInfo, info) {
    userInfo.username = info.username
    userInfo.admin = info.admin
  }
}

export default {
  state,
  mutations,
  getters
}
