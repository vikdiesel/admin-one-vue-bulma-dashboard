<template>
  <nav
    v-show="isNavBarVisible"
    id="navbar-main"
    class="navbar is-fixed-top"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="asideToggleMobile"
      >
        <b-icon :icon="asideMobileIcon" />
      </a>
      <a
        class="navbar-item is-hidden-touch is-hidden-widescreen is-desktop-icon-only"
        @click.prevent="asideDesktopOnlyToggle"
      >
        <b-icon icon="menu" />
      </a>
      <div class="navbar-item has-control no-left-space-touch no-left-space-desktop-only">
        <div class="control">
          <input
            class="input"
            placeholder="Search everywhere..."
          >
        </div>
      </div>
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuToggle"
      >
        <b-icon
          :icon="menuToggleIcon"
          custom-size="default"
        />
      </a>
    </div>
    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuActive }"
    >
      <div class="navbar-end">
        <nav-bar-menu class="has-divider">
          <b-icon
            icon="menu"
            custom-size="default"
          />
          <span>Sample Menu</span>
          <div
            slot="dropdown"
            class="navbar-dropdown"
          >
            <router-link
              to="/profile"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon
                icon="account"
                custom-size="default"
              />
              <span>My Profile</span>
            </router-link>
            <a class="navbar-item">
              <b-icon
                icon="settings"
                custom-size="default"
              />
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <b-icon
                icon="email"
                custom-size="default"
              />
              <span>Messages</span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <b-icon
                icon="logout"
                custom-size="default"
              />
              <span>Log Out</span>
            </a>
          </div>
        </nav-bar-menu>
        <nav-bar-menu class="has-divider has-user-avatar">
          <user-avatar />
          <div class="is-user-name">
            <span>{{ userName }}</span>
          </div>

          <div
            slot="dropdown"
            class="navbar-dropdown"
          >
            <router-link
              to="/profile"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon
                icon="account"
                custom-size="default"
              />
              <span>My Profile</span>
            </router-link>
            <a class="navbar-item">
              <b-icon
                icon="settings"
                custom-size="default"
              />
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <b-icon
                icon="email"
                custom-size="default"
              />
              <span>Messages</span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <b-icon
                icon="logout"
                custom-size="default"
              />
              <span>Log Out</span>
            </a>
          </div>
        </nav-bar-menu>
        <a
          href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
          class="navbar-item has-divider is-desktop-icon-only"
          title="GitHub"
        >
          <b-icon
            icon="github-circle"
            custom-size="default"
          />
          <span>GitHub</span>
        </a>
        <a
          class="navbar-item is-desktop-icon-only"
          title="Log out"
          @click="logout"
        >
          <b-icon
            icon="logout"
            custom-size="default"
          />
          <span>Log out</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import NavBarMenu from '@/components/NavBarMenu.vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    UserAvatar,
    NavBarMenu
  },
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    asideMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    menuToggleIcon () {
      return this.isMenuActive ? 'close' : 'dots-vertical'
    },
    ...mapState([
      'isAsideMobileExpanded',
      'isNavBarVisible',
      'userName'
    ])
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isMenuActive = false
    })
  },
  methods: {
    asideToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    asideDesktopOnlyToggle () {
      this.$store.dispatch('asideDesktopOnlyToggle')
    },
    menuToggle () {
      this.isMenuActive = !this.isMenuActive
    },
    logout () {
      this.$buefy.snackbar.open({
        message: 'Log out clicked',
        queue: false
      })
    }
  }
})
</script>
