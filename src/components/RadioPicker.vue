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
      <b-radio
        v-model="newValue"
        :native-value="k"
        :type="type"
      >
        {{ v }}
      </b-radio>
    </div>
  </b-field>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RadioPicker',
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
      type: [String, Number],
      default: null
    }
  },
  emits: ['input'],
  setup (props, { emit }) {
    const newValue = computed({
      get: () => props.value,
      set: value => {
        emit('input', value)
      }
    })

    return {
      newValue
    }
  }
}
</script>
