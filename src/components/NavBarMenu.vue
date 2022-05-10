<template>
  <div
    ref="root"
    class="navbar-item has-dropdown has-dropdown-with-icons"
    :class="{ 'is-hoverable': isHoverable, 'is-active': isDropdownActive }"
    @click="toggle"
  >
    <a class="navbar-link is-arrowless">
      <slot />
      <b-icon
        :icon="dropdownIcon"
        custom-size="default"
      />
    </a>
    <slot name="dropdown" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavBarMenu',
  props: {
    isHoverable: Boolean
  },
  data () {
    return {
      isDropdownActive: false
    }
  },
  computed: {
    dropdownIcon () {
      return this.isDropdownActive ? 'chevron-up' : 'chevron-down'
    }
  },
  mounted () {
    window.addEventListener('click', this.forceClose)
  },
  beforeDestroy () {
    window.removeEventListener('click', this.forceClose)
  },
  methods: {
    toggle () {
      if (!this.isHoverable) {
        this.isDropdownActive = !this.isDropdownActive
      }
    },
    forceClose (e) {
      if (!this.$refs.root.contains(e.target)) {
        this.isDropdownActive = false
      }
    }

  }
})
</script>
