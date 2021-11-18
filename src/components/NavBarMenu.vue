<template>
  <nav-bar-item
    :has-divider="hasDivider"
    :active="isDropdownActive"
    dropdown
    @click="toggle"
    ref="root"
  >
    <a class="jb-navbar-dropdown-label">
      <slot />
      <icon :path="toggleDropdownIcon" class="jb-navbar-dropdown-icon" />
    </a>
    <div
      class="jb-navbar-dropdown-menu"
      :class="{'is-inactive':!isDropdownActive}"
    >
      <slot name="dropdown" />
    </div>
  </nav-bar-item>
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import NavBarItem from '@/components/NavBarItem'
import Icon from '@/components/Icon'

export default {
  name: 'NavBarMenu',
  components: { Icon, NavBarItem },
  props: {
    hasDivider: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const isDropdownActive = ref(false)

    const toggleDropdownIcon = computed(() => isDropdownActive.value ? mdiChevronUp : mdiChevronDown)

    const toggle = () => {
      isDropdownActive.value = !isDropdownActive.value
    }

    const root = ref(null)

    const forceClose = event => {
      if (!root.value.$el.contains(event.target)) {
        isDropdownActive.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('click', forceClose)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('click', forceClose)
    })

    return {
      isDropdownActive,
      toggleDropdownIcon,
      toggle,
      root
    }
  }
}
</script>
