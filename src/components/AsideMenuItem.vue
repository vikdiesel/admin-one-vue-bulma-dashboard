<template>
  <li>
    <component
      :is="componentIs"
      :to="itemTo"
      :href="itemHref"
      :target="itemTarget"
      v-slot="vSlot"
      class="jb-aside-menu-item"
      :class="[isSubmenuList ? 'is-submenu-list' : 'is-ancestor-list']"
      @click="menuClick"
    >
      <icon
        v-if="item.icon"
        :path="item.icon"
        class="is-aside-icon"
        :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
      />
      <span
        class="jb-aside-menu-item-label"
        :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
      >{{ item.label }}</span>
      <icon
        v-if="hasDropdown"
        :path="dropdownIcon"
        class="is-aside-icon"
        :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
      />
    </component>
    <aside-menu-list
      v-if="hasDropdown"
      :menu="item.menu"
      :class="{ 'jb-submenu-container-hidden': !isDropdownActive, 'jb-submenu-container-visible': isDropdownActive }"
      is-submenu-list
    />
  </li>
</template>

<script>
import { defineAsyncComponent, ref, computed } from 'vue'
import { mdiMinus, mdiPlus } from '@mdi/js'
import Icon from '@/components/Icon'

export default {
  name: 'AsideMenuItem',
  components: {
    AsideMenuList: defineAsyncComponent(() => import('@/components/AsideMenuList')),
    Icon
  },
  emits: ['menu-click'],
  props: {
    item: Object,
    isSubmenuList: Boolean
  },
  setup (props, { emit }) {
    const isDropdownActive = ref(false)

    const componentIs = computed(() => props.item.to ? 'router-link' : 'a')

    const hasDropdown = computed(() => !!props.item.menu)

    const dropdownIcon = computed(() => isDropdownActive.value ? mdiMinus : mdiPlus)

    const itemTo = computed(() => props.item.to || null)

    const itemHref = computed(() => props.item.href || null)

    const itemTarget = computed(() => componentIs.value === 'a' && props.item.target ? props.item.target : null)

    const menuClick = event => {
      emit('menu-click', event, props.item)

      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value
      }
    }

    const styleActive = 'is-active'

    const styleInactive = 'is-inactive'

    return {
      isDropdownActive,
      componentIs,
      hasDropdown,
      dropdownIcon,
      itemTo,
      itemHref,
      itemTarget,
      menuClick,
      styleActive,
      styleInactive
    }
  }
}
</script>
