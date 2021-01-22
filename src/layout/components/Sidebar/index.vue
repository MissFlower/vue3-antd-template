<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:00:06
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 20:17:49
-->
<template>
  <div class="sidebar-container">
    <AMenu
      class="menu-container"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
    >
      <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" />
    </AMenu>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  reactive,
  toRefs
} from 'vue'
import { useStore } from 'vuex'

import SidebarItem from './SidebarItem'
export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => !store.getters.sideBar.opened)
    const permission_routes = computed(() => store.getters.permission_routes)
    const state = reactive({
      selectedKeys: ['/home'],
      openKeys: []
    })
    return {
      isCollapse,
      permission_routes,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
