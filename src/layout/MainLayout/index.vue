<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:59:16
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-08 20:15:05
-->
<template>
  <ALayout class="app-wrapper">
    <!-- 导航栏 -->
    <ALayoutHeader class="header">
      <Navbar />
    </ALayoutHeader>

    <ALayout>
      <ALayoutSider
        :width="sideBarWidth"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
      >
        <!-- 左侧菜单栏 -->
        <Sidebar />
      </ALayoutSider>

      <ALayout>
        <!-- 内容区 -->
        <ALayout-content class="main-container">
          <AppMain />
        </ALayout-content>
      </ALayout>
    </ALayout>
  </ALayout>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { Navbar, Sidebar, AppMain } from 'src/layout/components/index'
import { sideBarWidth as sideBarStyle } from '@/styles/variables.scss'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  setup() {
    // setup
    const store = useStore()
    const collapsed = computed(() => store.state.app.sidebar.collapsed)
    const sideBarWidth = computed(() => sideBarStyle)

    return {
      collapsed,
      sideBarWidth
    }
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;

  .header {
    height: 50px;
    padding: 0;
    background: #FFF;
  }
}
</style>
