<template>
  <div>
    {{ prefix }}{{ newValueFormatted }}{{ suffix }}
  </div>
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
      newValue: 0,
      step: 0
    }
  },
  computed: {
    newValueFormatted () {
      return (this.newValue < 1000) ? this.newValue : numeral(this.newValue).format('0,0')
    }
  },
  mounted () {
    this.growInit()
  },
  methods: {
    growInit () {
      const m = this.value / (this.duration / 25)
      this.grow(m)
    },
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
    }
  },
  watch: {
    value () {
      this.growInit()
    }
  }
}
</script>
