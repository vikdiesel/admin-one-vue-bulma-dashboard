<template>
  <component :is="is" :class="componentClass" :to="to" :href="href" :exact-active-class="activeClass">
    <slot />
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'NavBarItem',
  props: {
    href: String,
    to: String,
    hasDivider: Boolean,
    isDesktopIconOnly: Boolean,
    dropdown: Boolean,
    active: Boolean,
    activeColor: {
      type: String,
      default: 'is-active'
    },
    pX: String
  },
  setup (props) {
    const is = computed(() => {
      if (props.href) {
        return 'a'
      }

      if (props.to) {
        return 'router-link'
      }

      return 'div'
    })

    const componentClass = computed(() => {
      const base = [
        'jb-navbar-item',
        props.dropdown ? 'is-dropdown' : 'is-default',
        props.active ? props.activeColor : ''
      ]

      if (props.hasDivider) {
        base.push('has-divider')
      }

      if (props.isDesktopIconOnly) {
        base.push('has-desktop-icon-only')
      }

      return base
    })

    const activeClass = computed(() => {
      return is.value === 'router-link' ? props.activeColor : null
    })

    return { is, componentClass, activeClass }
  }
}
</script>
