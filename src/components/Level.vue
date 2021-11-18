<script>
import { h } from 'vue'

export default {
  name: 'Level',
  props: {
    mobile: Boolean,
    type: {
      type: String,
      default: 'between'
    }
  },
  render () {
    const parentClass = [this.type, 'jb-level']

    const parentMobileClass = ['is-mobile']

    const parentBaseClass = ['is-default']

    const childBaseClass = ['is-child']

    return h(
      'div',
      { class: parentClass.concat(this.mobile ? parentMobileClass : parentBaseClass) },
      this.$slots.default().map((element, index) => {
        const childClass = (!this.mobile && this.$slots.default().length > index + 1)
          ? childBaseClass.concat(['has-space'])
          : childBaseClass

        return h('div', { class: childClass }, [
          element
        ])
      })
    )
  }
}
</script>
