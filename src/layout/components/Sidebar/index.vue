<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:00:06
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-21 13:05:53
-->
<template>
  <AMenu
    mode="inline"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    class="sidebar-container"
    @click="clickHandle"
    @openChange="onOpenChange"
  >
    <SidebarItem
      v-for="route in permission_routes"
      :key="route.path"
      :item="route"
    />
  </AMenu>
</template>

<script>
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  watch,
  onMounted
} from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import SidebarItem from './SidebarItem'
export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const store = useStore()
    const permission_routes = computed(() => store.getters.permission_routes)
    const collapsed = computed(() => store.state.app.sidebar.collapsed)

    const route = useRoute()
    const { meta } = route
    const state = reactive({
      selectedKeys: [],
      openKeys: []
    })
    let lastOpenKeys = []
    // selectedKeys: ['menu1-1-1'],
    // openKeys: ['/menu', 'menu1', 'menu1-1']

    onMounted(() => {
      watch(collapsed, newValue => {
        console.log(123, newValue)
        if (newValue) {
          lastOpenKeys = state.openKeys
          state.openKeys = []
        } else {
          console.log(1, lastOpenKeys)
          state.openKeys = lastOpenKeys
          lastOpenKeys = []
        }
      },
      {
        immediate: true
      })

      watch(() => route.path, (newPath) => {
        if (meta.activeMenu) {
          state.selectedKeys = [meta.activeMenu]
        }

        const pathList = newPath.split('/')
        const pathListLen = pathList.length
        if (_onlyOneChildren(newPath)) {
          const parentPath = _getParentPath(newPath)
          state.selectedKeys = [parentPath[0].path]
        } else {
          state.selectedKeys = [newPath]
        }

        state.openKeys = []
        if (pathListLen > 2) {
          for (let i = 1; i < pathListLen - 1; i++) {
            if (state.openKeys.length > 0) {
              state.openKeys.push(`${state.openKeys[state.openKeys.length - 1]}/${pathList[i]}`)
            } else {
              state.openKeys.push(`/${pathList[i]}`)
            }
          }
        } else {
          state.openKeys = [`/${pathList[pathListLen - 1]}`]
        }

        console.log(collapsed.value)
        console.log(state.openKeys)
        if (collapsed.value) {
          lastOpenKeys = state.openKeys
          state.openKeys = []
        }
      },
      {
        immediate: true
      })
    })

    const _onlyOneChildren = (path) => {
      // 筛选路由中有且仅有一个子路由的路由集合
      const oneChildrenRoute = permission_routes.value.filter(item => {
        return (item.children && !item.children.children && item.children.length === 1)
      })
      // 将仅有一个子路由的路由集合过滤出和当前路径一致的路由
      const _ = oneChildrenRoute.filter(item => {
        return item.children[0].fullPath === path
      })
      // 返回符合当前路径的路由数量（1或0）
      // 这一步主要是判断页面路由是否在路由表中存在
      // 存在：返回当前路由做下一步路由拼接
      // 不存在：直接返回当前页面路由 最终由路由拦截器转为404页面
      return _.length
    }

    const _getParentPath = path => {
      const parentPath = permission_routes.value.filter(item => {
        return (item.children?.[0].fullPath === path)
      })
      return parentPath
    }

    const clickHandle = ({ item, key, keyPath }) => {
      // console.log(item, key, keyPath)
    }

    const onOpenChange = openKeys => {
      console.log(openKeys)
      // 反复点击一个菜单组
      if (openKeys.length === 1 || openKeys.length === 0) {
        state.openKeys = openKeys
        return
      }
      const lastOpenKey = openKeys[openKeys.length - 1]
      // 如果点击的还是同一个大菜单下
      if (lastOpenKey.includes(openKeys[0])) {
        state.openKeys = openKeys
      } else {
        state.openKeys = lastOpenKey ? [lastOpenKey] : []
      }
    }

    return {
      permission_routes,
      ...toRefs(state),
      clickHandle,
      onOpenChange
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
