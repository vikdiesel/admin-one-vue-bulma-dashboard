<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    extraOptions: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      ctx: null
    }
  },
  mounted () {
    this.$watch(
      'chartData',
      (newVal, oldVal) => {
        if (!oldVal) {
          this.renderChart(this.chartData, this.extraOptions)
        }
      },
      { immediate: true }
    )
  }
}
</script>
