<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:59:51
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-08 18:59:39
-->

<template>
  <div class="nav-bar">
    <div class="logo-box">
      <img v-if="logo" :src="logo" class="sidebar-logo" >
      <div class="logo">{{ title }}</div>
    </div>
    <div class="nav-content">
      <Hamburger :is-active="isCollapsed" @toggleClick="toggleCollapsed" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import Hamburger from 'src/components/Hamburger'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Navbar',
  components: {
    Hamburger
  },
  setup() {
    const store = useStore()
    const logo = ref(
      'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    )
    const title = ref('Vue3-Antd-Admin')
    const isCollapsed = computed(() => store.getters.sidebar.collapsed)

    const toggleCollapsed = () => {
      store.dispatch('app/toggleSideBar')
    }
    return {
      logo,
      title,
      isCollapsed,
      toggleCollapsed
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
