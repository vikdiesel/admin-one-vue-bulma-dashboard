<template>
  <div>{{ prefix }}{{ newValueFormatted }}{{ suffix }}</div>
</template>

<script>
import numeral from 'numeral'

export default {
  name: 'GrowingNumber',
  props: {
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      newValue: 0
    }
  },
  computed: {
    newValueFormatted () {
      return this.newValue < 1000 ? this.newValue : numeral(this.newValue).format('0,0')
    }
  },
  watch: {
    value () {
      this.growInit()
    }
  },
  mounted () {
    this.growInit()
  },
  methods: {
    grow (m) {
      const v = Math.ceil(this.newValue + m)

      if (v > this.value) {
        this.newValue = this.value
        return false
      }

      this.newValue = v

      setTimeout(() => {
        this.grow(m)
      }, 25)
    },
    growInit () {
      this.grow(this.value / (this.duration / 25))
    }
  }
}
</script>
