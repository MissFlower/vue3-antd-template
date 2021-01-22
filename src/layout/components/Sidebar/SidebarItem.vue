<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 17:01:21
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 20:37:54
-->
<template>
  <div v-if="!item.hidden">
    <!-- 处理路由下children只有一个被展示的情况 -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild?.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <AppLink v-if="onlyOneChild?.meta" :to="resolvePath(onlyOneChild?.path)">
        <AMenuItem :key="resolvePath(onlyOneChild?.path)" :class="{'submenu-title-noDropdown': !isNest}">
          <Item :icon="onlyOneChild?.meta?.icon || (item.meta && item.meta.icon)" :title="onlyOneChild?.meta?.title" />
        </AMenuItem>
      </AppLink>
    </template>

    <ASubMenu v-else ref="subMenu" :key="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title>
        <Item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </ASubMenu>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import path from 'path'
import { isExternal } from '@/utils/validate'
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
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
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
      console.log(showingChildren)

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

    const resolvePath = function(routePath) {
      console.log(routePath)
      if (isExternal(routePath)) {
        return routePath
      }

      if (isExternal(props.basePath)) {
        return props.basePath
      }

      return path.resolve(props.basePath, routePath)
    }

    return {
      hasOneShowingChild,
      resolvePath,
      onlyOneChild
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
