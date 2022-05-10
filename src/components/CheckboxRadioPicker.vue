<template>
  <b-field
    grouped
    group-multiline
  >
    <div
      v-for="(v, k) in options"
      :key="k"
      class="control"
    >
      <component
        :is="componentIs"
        v-model="newValue"
        :native-value="k"
        :type="type"
      >
        {{ v }}
      </component>
    </div>
  </b-field>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CheckboxRadioPicker',
  props: {
    options: {
      type: Object,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, Array],
      default: null
    }
  },
  emits: ['input'],
  computed: {
    componentIs () {
      return typeof this.value === 'object' ? 'b-checkbox' : 'b-radio'
    },
    newValue: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  }
})
</script>
