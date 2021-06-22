/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:28:12
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-08 20:58:30
 */
import Cookies from 'js-cookie'
import * as types from './types'
const state = {
  sidebar: {
    collapsed: +Cookies.get('sidebarStatus') ? !+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  [types.TOGGLE_SIDEBAR]: state => {
    state.sidebar.collapsed = !state.sidebar.collapsed
    console.log(state.sidebar.collapsed)
    state.sidebar.withoutAnimation = false
    if (state.sidebar.collapsed) {
      Cookies.set('sidebarStatus', 0)
    } else {
      Cookies.set('sidebarStatus', 1)
    }
  }
}

const actions = {
  [types.toggleSideBar]({ commit }) {
    commit(types.TOGGLE_SIDEBAR)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
