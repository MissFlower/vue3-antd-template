<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 17:01:21
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-04-08 18:43:26
-->
<template>
  <template v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <AMenuItem :key="onlyOneChild.fullPath">
        <AppLink v-if="onlyOneChild.meta" :to="onlyOneChild.fullPath">
        <Item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" />
      </AppLink>
   </AMenuItem>
    </template>

    <ASubMenu v-else ref="subMenu" :key="item.fullPath">
      <template v-slot:title>
        <Item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.fullPath"
        :item="child"
      />
    </ASubMenu>
  </template>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AppLink from './Link'
import Item from './Item'

export default defineComponent({
  name: 'SidebarItem',
  components: {
    AppLink,
    Item
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const onlyOneChild = ref(null)

    const hasOneShowingChild = function(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // 收集所有显示的子路由
          onlyOneChild.value = item
          return true
        }
      })
      // console.log(showingChildren)

      // 当只有一个子路由器时，默认显示子路由器
      if (showingChildren.length === 1) {
        return true
      }

      // 如果没有要显示的子路由器，则显示父路由器
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }

    return {
      hasOneShowingChild,
      onlyOneChild
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
