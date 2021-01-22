<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 18:02:25
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 19:53:26
-->
<template>
  <IconFont v-if="icon" :type="icon"/>
  <span>{{ title }}</span>
  <!-- <a-tag :color="tag.color" v-if="tag.value"> {{ tag.value }} </a-tag> -->
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
.sub-el-icon {
  width: 1em;
  height: 1em;
  color: currentColor;
}
</style>
