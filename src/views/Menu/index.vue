<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-26 10:44:39
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-26 11:04:59
-->
<template>
  <a-card class="about">
    <p>title: {{title}}</p>
    <p>path: {{path}}</p>
  </a-card>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const title = ref(route.meta.title)
    const path = ref(route.path)
    return {
      path,
      title
    }
  }
})
</script>
