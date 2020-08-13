<template>
  <b-field grouped group-multiline>
    <div v-for="(v, k) in options" :key="k" class="control">
      <b-radio v-model="newValue" :native-value="k" :type="type" @input="input">
        {{ v }}
      </b-radio>
    </div>
  </b-field>
</template>

<script>
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
  data () {
    return {
      newValue: null
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
