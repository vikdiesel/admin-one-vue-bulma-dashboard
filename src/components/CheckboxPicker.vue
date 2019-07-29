<template>
  <b-field grouped group-multiline>
    <div v-for="(v,k) in options" class="control" :key="k">
      <b-checkbox v-model="newValue" :native-value="k" @input="input" :type="type">
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
      default: []
    }
  },
  data () {
    return {
      newValue: []
    }
  },
  created () {
    this.newValue = this.value
  },
  methods: {
    input () {
      this.$emit('input', this.newValue)
    }
  },
  watch: {
    value (newValue) {
      this.newValue = newValue
    }
  }
}
</script>
