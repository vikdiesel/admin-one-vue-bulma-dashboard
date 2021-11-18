<template>
  <nav
    v-show="isNavBarVisible"
    class="jb-navbar is-fixed-top"
    :class="{'aside-mobile-expanded':isAsideMobileExpanded}"
  >
    <div class="jb-navbar-controls primary">
      <nav-bar-item class="is-mobile-toggle-icon" @click.prevent="menuToggleMobile">
        <icon :path="menuToggleMobileIcon" size="24" />
      </nav-bar-item>
      <nav-bar-item class="is-desktop-toggle-icon" @click.prevent="menuOpenLg">
        <icon :path="mdiMenu" size="24" />
      </nav-bar-item>
      <nav-bar-item>
        <nav-bar-search />
      </nav-bar-item>
    </div>
    <div class="jb-navbar-controls secondary">
      <nav-bar-item @click.prevent="menuNavBarToggle">
        <icon :path="menuNavBarToggleIcon" size="24" />
      </nav-bar-item>
    </div>
    <div
      class="jb-navbar-menu"
      :class="[isMenuNavBarActive ? 'active' : 'inactive']"
    >
      <div class="jb-navbar-menu-container">
        <nav-bar-menu has-divider>
          <nav-bar-item-label :icon="mdiMenu" label="Sample menu"/>

          <template #dropdown>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiClockOutline" label="Item One"/>
            </nav-bar-item>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiCloud" label="Item Two"/>
            </nav-bar-item>
            <nav-bar-menu-divider/>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiCrop" label="Item Last"/>
            </nav-bar-item>
          </template>
        </nav-bar-menu>
        <nav-bar-menu has-divider>
          <user-avatar class="is-navbar-avatar" />
          <div>
            <span>{{ userName }}</span>
          </div>

          <template #dropdown>
            <nav-bar-item to="/profile">
              <nav-bar-item-label :icon="mdiAccount" label="My Profile"/>
            </nav-bar-item>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiCogOutline" label="Settings"/>
            </nav-bar-item>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiEmail" label="Messages"/>
            </nav-bar-item>
            <nav-bar-menu-divider/>
            <nav-bar-item>
              <nav-bar-item-label :icon="mdiLogout" label="Log Out"/>
            </nav-bar-item>
          </template>
        </nav-bar-menu>
        <nav-bar-item @click.prevent="toggleLightDark" has-divider is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiThemeLightDark" label="Light/Dark" is-desktop-icon-only />
        </nav-bar-item>
        <nav-bar-item href="https://github.com/justboil/admin-one-vue-tailwind" has-divider is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiGithub" label="GitHub" is-desktop-icon-only />
        </nav-bar-item>
        <nav-bar-item is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiLogout" label="Log out" is-desktop-icon-only />
        </nav-bar-item>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import {
  mdiForwardburger,
  mdiBackburger,
  mdiClose,
  mdiDotsVertical,
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiGithub,
  mdiThemeLightDark
} from '@mdi/js'
import NavBarItem from '@/components/NavBarItem'
import NavBarItemLabel from '@/components/NavBarItemLabel'
import NavBarMenu from '@/components/NavBarMenu'
import NavBarMenuDivider from '@/components/NavBarMenuDivider'
import UserAvatar from '@/components/UserAvatar'
import Icon from '@/components/Icon'
import NavBarSearch from '@/components/NavBarSearch'

export default {
  name: 'NavBar',
  components: {
    NavBarSearch,
    UserAvatar,
    NavBarMenu,
    NavBarItem,
    NavBarItemLabel,
    NavBarMenuDivider,
    Icon
  },
  setup () {
    const store = useStore()

    const toggleLightDark = () => {
      store.dispatch('darkMode')
    }

    const isNavBarVisible = computed(() => !store.state.isFullScreen)

    const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

    const userName = computed(() => store.state.userName)

    const menuToggleMobileIcon = computed(() => isAsideMobileExpanded.value ? mdiBackburger : mdiForwardburger)

    const menuToggleMobile = () => store.dispatch('asideMobileToggle')

    const isMenuNavBarActive = ref(false)

    const menuNavBarToggleIcon = computed(() => isMenuNavBarActive.value ? mdiClose : mdiDotsVertical)

    const menuNavBarToggle = () => {
      isMenuNavBarActive.value = !isMenuNavBarActive.value
    }

    const menuOpenLg = () => {
      store.dispatch('asideLgToggle', true)
    }

    return {
      toggleLightDark,
      isNavBarVisible,
      isAsideMobileExpanded,
      userName,
      menuToggleMobileIcon,
      menuToggleMobile,
      isMenuNavBarActive,
      menuNavBarToggleIcon,
      menuNavBarToggle,
      menuOpenLg,
      mdiMenu,
      mdiClockOutline,
      mdiCloud,
      mdiCrop,
      mdiAccount,
      mdiCogOutline,
      mdiEmail,
      mdiLogout,
      mdiGithub,
      mdiThemeLightDark
    }
  }
}
</script>
