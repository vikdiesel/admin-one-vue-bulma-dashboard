<template>
  <icon :path="icon" size="24" class="is-rounded-icon" :class="iconStyle"/>
</template>

<script>
import { computed } from 'vue'
import { colorsText, colorsBg } from '@/colors.js'
import Icon from '@/components/Icon'

export default {
  name: 'IconRounded',
  components: {
    Icon
  },
  props: {
    icon: String,
    type: String,
    bg: Boolean
  },
  setup (props) {
    const iconStyle = computed(
      () => props.bg ? colorsBg[props.type] : [...colorsText[props.type], 'has-bg-default']
    )

    return {
      iconStyle
    }
  }
}
</script>
