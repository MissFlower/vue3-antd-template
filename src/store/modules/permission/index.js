/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:29:55
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-25 16:39:27
 */
import { constantRoutes, asyncRoutes } from 'src/router'
import * as types from './types'
import { isExternal } from '@/utils/validate'
import path from 'path'
/**
 * @Function: 判断当前用户是否具有权限
 * @Description: 使用code确定当前用户是否具有权限
 * @param {permissionList}
 * @param {route}
 * @return {Boolean}
 */
function hasPermission(permissionList, route) {
  if (route.meta && route.meta.code) {
    return permissionList.some(permission => permission.code === route.meta.code)
  } else {
    return true
  }
}
/**
 * @Function: 过滤异步路由表
 * @Description: 递归过滤异步路由表
 * @param {asyncRoutes}
 * @param {permissionList}
 * @return {[]}
 */
function filterAsyncRoutes(asyncRoutes, permissionList, baseUrl = '/') {
  const res = []
  asyncRoutes.forEach(route => {
    route.fullPath = isExternal(route.path)
      ? route.path
      : path.resolve(baseUrl, route.path)

    const tmp = { ...route }

    if (hasPermission(permissionList, route)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissionList, route.fullPath)
      }
      res.push(tmp)
    }
  })
  return res
}

const withFullPathContantRoutes = (function setFullPathConstantRoutes(constantRoutes, baseUrl = '/') {
  const res = []
  constantRoutes.forEach(route => {
    route.fullPath = isExternal(route.path)
      ? route.path
      : path.resolve(baseUrl, route.path)

    const tmp = { ...route }

    if (tmp.children) {
      tmp.children = setFullPathConstantRoutes(tmp.children, route.fullPath)
    }
    res.push(tmp)
  })
  return res
})(constantRoutes)

const state = {
  routes: withFullPathContantRoutes || [],
  addRoutes: []
}

const mutations = {
  [types.SET_ROUTES]: (state, routes) => {
    state.addRoutes = routes
    state.routes = withFullPathContantRoutes.concat(routes)
  }
}

const actions = {
  [types.generateRoutes]({ commit }, permissionList) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, permissionList)
      commit(types.SET_ROUTES, accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
