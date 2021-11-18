<template>
  <icon :path="icon" class="jb-navbar-item-label-icon" />
  <span class="jb-navbar-item-label" :class="{'has-desktop-icon-only':isDesktopIconOnly}">{{ label }}</span>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'NavBarItemLabel',
  components: { Icon },
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isDesktopIconOnly: Boolean
  }
}
</script>
