/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:21:02
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 15:38:16
 */
import { createStore } from 'vuex'

import getters from '@/store/getters'
import user from './modules/user'
import app from './modules/app'
import permission from './modules/permission'

export default createStore({
  modules: {
    user,
    app,
    permission
  },
  getters
})
