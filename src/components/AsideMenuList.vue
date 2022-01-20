<template>
  <ul :class="{ 'menu-list': !isSubmenuList }">
    <aside-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      @menu-click="menuClick"
    />
  </ul>
</template>

<script>
import AsideMenuItem from '@/components/AsideMenuItem.vue'

export default {
  name: 'AsideMenuList',
  components: {
    AsideMenuItem
  },
  props: {
    isSubmenuList: Boolean,
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ['menu-click'],
  methods: {
    menuClick (item) {
      this.$emit('menu-click', item)
    }
  }
}
</script>
