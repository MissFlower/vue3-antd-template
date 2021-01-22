<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:59:51
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 15:03:04
-->

<template>
  <div class="nav-bar">
    <Hamburger @toggleClick="toggleClick" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Hamburger from 'src/components/Hamburger/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Hamburger
  },
  setup() {
    function toggleClick() {
      console.log(1)
    }
    return {
      toggleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #DDD;
  background-color: #F7F7F7;
  box-shadow: 0 4px 10px #BBB;
}
</style>
