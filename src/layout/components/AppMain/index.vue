<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:59:33
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 19:33:52
-->
<template>
  <router-view v-slot="{ Component }">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition
    name="fade-transform"
    mode="out-in"
  >
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
    <router-view :key="key" />
  </transition> -->
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'AppMain',
  setup() {
    const { path } = useRoute()
    const key = computed(() => {
      if (document.querySelector('.app-main')?.scrollTop) {
        document.querySelector('.app-main').scrollTop = 0
      }
      return path
    })

    return {
      key
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
