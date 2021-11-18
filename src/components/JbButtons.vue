<script>
import { h } from 'vue'

export default {
  name: 'JbButtons',
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: 'start'
    },
    classAddon: {
      type: String,
      default: 'has-space-default'
    },
    mb: {
      type: String,
      default: 'has-space-default'
    }
  },
  render () {
    const hasSlot = this.$slots && this.$slots.default

    const parentClass = [
      'jb-buttons',
      this.type,
      this.noWrap ? 'nowrap' : 'wrap'
    ]

    if (this.mb) {
      parentClass.push(this.mb)
    }

    return h(
      'div',
      { class: parentClass },
      hasSlot
        ? this.$slots.default().map(element => {
          if (element && element.children && typeof element.children === 'object') {
            return h(
              element,
              {},
              element.children.map(child => {
                return h(child, { class: [this.classAddon] })
              }))
          }

          return h(element, { class: [this.classAddon] })
        })
        : null
    )
  }
}
</script>
