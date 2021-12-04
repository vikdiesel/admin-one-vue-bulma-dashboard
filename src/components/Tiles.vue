<script>
import { h } from 'vue'
import chunk from 'lodash/chunk'

export default {
  name: 'Tiles',
  props: {
    maxPerRow: {
      type: Number,
      default: 5
    }
  },
  render () {
    const renderAncestor = elements => h(
      'div',
      { attrs: { class: 'tile is-ancestor' } },
      elements.map((element) => {
        return h('div', { attrs: { class: 'tile is-parent' } }, [
          element
        ])
      })
    )

    // const slots = useSlots()

    if (this.$slots.default().length <= this.maxPerRow) {
      return renderAncestor(this.$slots.default())
    } else {
      return h(
        'div',
        { attrs: { class: 'is-tiles-wrapper' } },
        chunk(this.$slots.default(), this.maxPerRow).map((group) => {
          return renderAncestor(group)
        })
      )
    }
  }
}
</script>
