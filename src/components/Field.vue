<template>
  <div class="jb-field">
    <label v-if="label" class="jb-label">{{ label }}</label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div v-if="help" class="jb-field-help">{{ help }}</div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Field',
  props: {
    label: String,
    help: String
  },
  setup (props, { slots }) {
    const wrapperClass = computed(() => {
      const base = ['jb-field-control-wrapper']
      const slotsLength = slots.default().length

      if (slotsLength > 1) {
        base.push('has-one-slot-plus')
      }

      if (slotsLength === 2) {
        base.push('has-two-slots')
      }

      return base
    })

    return {
      wrapperClass
    }
  }
}
</script>
