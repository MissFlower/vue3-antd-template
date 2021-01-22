<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:52:09
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 15:01:18
-->
<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg
      :class="{'is-active':isActive}"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleClick'],
  setup(props, { emit }) {
    function toggleClick() {
      emit('toggleClick')
    }

    return {
      toggleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 15px;
}

.hamburger {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 5px 12px;
  vertical-align: middle;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.hamburger.is-active {
  transform: rotate(540deg);
}
</style>
