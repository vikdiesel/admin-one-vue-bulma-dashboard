<template>
  <b-field grouped group-multiline>
    <div v-for="(v,k) in options" class="control" :key="k">
      <b-radio v-model="newValue" :native-value="k" @input="input" :type="type">
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
      default: null
    }
  },
  data () {
    return {
      newValue: null
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
