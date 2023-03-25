<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Usuarios"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Ventas"
        />
      </tiles-block>

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
            :chart-data="chartData"
            :chart-options="chartOptions"
            :style="{height: '100%'}"
          />
        </div>
      </card-component>

      <card-component
        title="Clientes"
        class="has-table has-mobile-sort-spaced"
      >
        <clients-table-sample />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ClientsTableSample,
    LineChart,
    CardComponent,
    CardWidget,
    TilesBlock,
    HeroBar,
    TitleBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Dashboard'],
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            display: false
          },
          x: {
            display: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },
  mounted () {
    this.fillChartData()

    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {
    fillChartData () {
      this.chartData = chartConfig.sampleChartData()
    }
  }
})
</script>
