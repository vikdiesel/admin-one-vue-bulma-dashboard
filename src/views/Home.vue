<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Clients"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </tiles>

      <card-component
        title="Performance"
        icon="finance"
        header-icon="reload"
        @header-icon-click="fillChartData"
      >
        <div
          v-if="chartData"
          class="chart-area"
        >
          <line-chart
            ref="bigChart"
            style="height: 100%;"
            chart-id="big-line-chart"
            :chart-data="chartData"
            :extra-options="chartOptions"
          />
        </div>
      </card-component>

      <card-component
        title="Clients"
        class="has-table has-mobile-sort-spaced"
      >
        <clients-table-sample />
      </card-component>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import * as chartConfig from '@/components/Charts/chart.config'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'
import CardComponent from '@/components/CardComponent'
import LineChart from '@/components/Charts/LineChart'
import ClientsTableSample from '@/components/ClientsTableSample'

export default {
  name: 'Home',
  components: {
    ClientsTableSample,
    LineChart,
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar
  },
  setup (props, { root: { $buefy } }) {
    const titleStack = ['Admin', 'Dashboard']

    const chartOptions = chartConfig.chartOptionsMain

    const chartData = ref(null)

    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData()
    }

    onMounted(() => {
      fillChartData()

      $buefy.snackbar.open({
        message: 'Welcome back',
        queue: false
      })
    })

    return {
      titleStack,
      chartOptions,
      chartData,
      fillChartData
    }
  }
}
</script>
