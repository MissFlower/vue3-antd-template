<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 17:53:29
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-25 09:39:57
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isWithExternal = computed(() => isExternal(props.to))
    const type = computed(() => {
      if (isWithExternal.value) {
        return 'a'
      }
      return 'router-link'
    })

    const linkProps = function(to) {
      // console.log(to)
      if (isWithExternal.value) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to
      }
    }

    return {
      type,
      linkProps
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
