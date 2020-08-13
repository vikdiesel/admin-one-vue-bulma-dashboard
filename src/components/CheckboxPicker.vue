<template>
  <b-field grouped group-multiline>
    <div v-for="(v, k) in options" :key="k" class="control">
      <b-checkbox
        v-model="newValue"
        :native-value="k"
        :type="type"
        @input="input"
      >
        {{ v }}
      </b-checkbox>
    </div>
  </b-field>
</template>

<script>
export default {
  name: 'CheckboxPicker',
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
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      newValue: []
    }
  },
  watch: {
    value (newValue) {
      this.newValue = newValue
    }
  },
  created () {
    this.newValue = this.value
  },
  methods: {
    input () {
      this.$emit('input', this.newValue)
    }
  }
}
</script>
