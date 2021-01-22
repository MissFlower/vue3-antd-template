<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:59:16
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 15:01:29
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧菜单栏 -->
    <Sidebar />
    <div class="right-container">
      <!-- 导航栏 -->
      <Navbar />
      <!-- 内容区 -->
      <div class="main-container">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Navbar, Sidebar, AppMain } from 'src/layout/components/index'

export default defineComponent({
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  setup() {
    // setup
  }
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .right-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 0;
    height: 100%;
    background-color: #FFF;
  }
}
</style>
