/**
 * Created by huangpeisong on 2017/4/16.
 */
import {
  IMPORTNAME
} from './types'

import state from './user'
import getters from './getters'

const mutations = {
  [IMPORTNAME] (userInfo, username) {
    userInfo.username = username
  }
}

export default {
  state,
  mutations,
  getters
}
