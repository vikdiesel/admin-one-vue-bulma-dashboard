<template>
  <aside
    v-show="!isFullScreen"
    class="jb-aside"
    :class="[ isAsideMobileExpanded ? 'is-aside-mobile-expanded' : '', isAsideLgActive ? 'is-aside-desktop-active' : '' ]"
  >
    <div class="jb-aside-header">
      <nav-bar-item class="is-desktop-toggle-icon" @click="asideLgClose" active-color="is-active-white" active>
        <icon :path="mdiMenu" class="cursor-pointer" size="24" />
      </nav-bar-item>
      <div class="jb-aside-label">
        <span>Admin</span> <b>One</b>
      </div>
    </div>
    <div>
      <template v-for="(menuGroup, index) in menu">
        <p v-if="typeof menuGroup === 'string'" :key="`a-${index}`" class="jb-aside-menu-group-label">
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :key="`b-${index}`"
          :menu="menuGroup"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { mdiMenu } from '@mdi/js'
import AsideMenuList from '@/components/AsideMenuList'
import NavBarItem from '@/components/NavBarItem'
import Icon from '@/components/Icon'

export default {
  name: 'AsideMenu',
  components: { AsideMenuList, NavBarItem, Icon },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const store = useStore()

    const isFullScreen = computed(() => store.state.isFullScreen)

    const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

    const isAsideLgActive = computed(() => store.state.isAsideLgActive)

    const asideLgClose = () => {
      store.dispatch('asideLgToggle', false)
    }

    const menuClick = (event, item) => {
      //
    }

    return {
      isFullScreen,
      isAsideMobileExpanded,
      isAsideLgActive,
      asideLgClose,
      menuClick,
      mdiMenu
    }
  }
}
</script>
