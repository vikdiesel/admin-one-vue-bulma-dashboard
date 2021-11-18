<template>
  <div class="jb-pill" :class="componentClass">
    <icon v-if="icon" :path="icon" class="is-pill-icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'
import Icon from '@/components/Icon'

export default {
  name: 'Pill',
  components: {
    Icon
  },
  props: {
    text: String,
    type: {
      type: String,
      required: true
    },
    icon: String,
    small: Boolean,
    outline: Boolean
  },
  setup (props) {
    const componentClass = computed(() => {
      const base = [
        'has-border',
        props.small ? 'is-small' : 'is-default'
      ]

      return [
        ...base,
        props.outline ? colorsOutline[props.type] : [...colorsBg[props.type], colorsBorders[props.type]]
      ]
    })

    return {
      componentClass
    }
  }
}
</script>
