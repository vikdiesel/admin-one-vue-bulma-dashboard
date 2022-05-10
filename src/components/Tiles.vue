<script>
import { defineComponent } from '@vue/composition-api'
import chunk from 'lodash/chunk'

export default defineComponent({
  name: 'Tiles',
  props: {
    maxPerRow: {
      type: Number,
      default: 5
    }
  },
  render (createElement) {
    const renderAncestor = elements => createElement(
      'div',
      { attrs: { class: 'tile is-ancestor' } },
      elements.map((element) => {
        return createElement('div', { attrs: { class: 'tile is-parent' } }, [
          element
        ])
      })
    )

    if (this.$slots.default.length <= this.maxPerRow) {
      return renderAncestor(this.$slots.default)
    } else {
      return createElement(
        'div',
        { attrs: { class: 'is-tiles-wrapper' } },
        chunk(this.$slots.default, this.maxPerRow).map((group) => {
          return renderAncestor(group)
        })
      )
    }
  }
})
</script>
