/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:28:12
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 17:34:00
 */
import Cookie from 'js-cookie'
// import * as types from './types'
const state = {
  sideBar: {
    opened: Cookie.get('sideBarStatus') ? !!+Cookie.get('sideBarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookie.get('size') || 'medium'
}

const mutations = {

}

const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
