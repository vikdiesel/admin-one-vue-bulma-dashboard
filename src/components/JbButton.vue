<template>
  <component :is="is" :class="componentClass" :href="href" :type="computedType" :to="to" :target="target">
    <icon v-if="icon" :path="icon" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>

<script>
import { mdiMenuUp } from '@mdi/js'
import { computed } from 'vue'
import { colorsButtons, colorsButtonsOutline } from '@/colors.js'
import Icon from '@/components/Icon'

export default {
  name: 'JbButton',
  components: {
    Icon
  },
  props: {
    label: [String, Number],
    icon: String,
    href: String,
    target: String,
    to: [String, Object],
    type: String,
    color: {
      type: String,
      default: 'white'
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    as: String
  },
  setup (props) {
    const is = computed(() => {
      if (props.as) {
        return props.as
      }

      if (props.to) {
        return 'router-link'
      }

      if (props.href) {
        return 'a'
      }

      return 'button'
    })

    const computedType = computed(() => {
      if (is.value === 'button') {
        return props.type ?? 'button'
      }

      return null
    })

    const iconOnly = computed(() => props.icon && !props.label)

    const labelClass = computed(() => props.small && props.icon ? 'is-label-small-with-icon' : 'is-label-default')

    const componentClass = computed(() => {
      const base = [
        'jb-button',
        props.active ? 'is-active' : 'has-focus-default',
        props.small ? 'is-size-small' : 'is-size-default',
        props.outline ? colorsButtonsOutline[props.color] : colorsButtons[props.color]
      ]

      return base
    })

    return {
      is,
      iconOnly,
      labelClass,
      computedType,
      componentClass,
      mdiMenuUp
    }
  }
}
</script>
