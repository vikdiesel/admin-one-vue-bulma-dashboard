<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item is-hidden-desktop" @click.prevent="menuToggleMobile">
        <b-icon :icon="menuToggleMobileIcon"/>
      </a>
    </div>
    <div class="navbar-brand is-right">
      <div class="navbar-item navbar-item-menu-toggle is-hidden-desktop">
        <a @click.prevent="menuNavBarToggle">
          <b-icon :icon="menuNavBarToggleIcon" custom-size="default"/>
        </a>
      </div>
    </div>
    <div ref="menuNavBar" class="navbar-menu fadeIn animated faster" :class="{'is-active':isMenuNavBarActive}">
      <div class="navbar-end">
        <nav-bar-menu class="has-divider">
          <b-icon icon="menu" custom-size="default"/>
          <span>Sample Menu</span>
          <div slot="dropdown" class="navbar-dropdown">
            <router-link to="/profile" class="navbar-item" exact-active-class="is-active">
              <b-icon icon="account" custom-size="default"/>
              <span>My Profile</span>
            </router-link>
            <a class="navbar-item">
              <b-icon icon="settings" custom-size="default"/>
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <b-icon icon="email" custom-size="default"/>
              <span>Messages</span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <b-icon icon="logout" custom-size="default"/>
              <span>Log Out</span>
            </a>
          </div>
        </nav-bar-menu>
        <a href="https://justboil.me/bulma-admin-template/one" class="navbar-item" title="About">
          <b-icon icon="help-circle-outline" custom-size="default"/>
          <span>About</span>
        </a>
        <a class="navbar-item" title="Log out" @click="logout">
          <b-icon icon="logout" custom-size="default"/>
          <span>Log out</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarMenu from '@/components/NavBarMenu'
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  components: {
    NavBarMenu
  },
  data () {
    return {
      isMenuNavBarActive: false
    }
  },
  computed: {
    menuNavBarToggleIcon () {
      return (this.isMenuNavBarActive) ? 'close' : 'dots-vertical'
    },
    menuToggleMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    ...mapState([
      'isNavBarVisible',
      'isAsideMobileExpanded'
    ])
  },
  methods: {
    menuToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    menuNavBarToggle () {
      this.isMenuNavBarActive = (!this.isMenuNavBarActive)
    },
    menuNavBarForceClose () {

    },
    logout () {
      this.$snackbar.open({
        message: 'Log out clicked',
        queue: false
      })
    }
  }
}
</script>
