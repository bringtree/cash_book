/**
 * Created by huangpeisong on 2017/4/16.
 */
import * as types from './types'

export default {
  importName: ({
                 commit
               }, info) => {
    commit(types.IMPORTINFO, info)
  }
}
