<template>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Dashboard</hero-bar>
  <main-section>
    <notification color="info" :icon="mdiGithub">
      Please star this project on
      <a href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard" class="is-underlined is-inherit" target="_blank">GitHub</a>
      <template #right>
        <jb-button
          href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
          :icon="mdiGithub"
          :outline="darkMode"
          label="GitHub"
          target="_blank"
          small
        />
      </template>
    </notification>
    <div class="jb-grid is-widgets-grid has-mb">
      <card-widget
        trend="12%"
        trend-type="up"
        color="jb-text-green"
        :icon="mdiAccountMultiple"
        :number="512"
        label="Clients"
      />
      <card-widget
        trend="12%"
        trend-type="down"
        color="jb-text-blue"
        :icon="mdiCartOutline"
        :number="7770"
        prefix="$"
        label="Sales"
      />
      <card-widget
        trend="Overflow"
        trend-type="alert"
        color="jb-text-red"
        :icon="mdiChartTimelineVariant"
        :number="256"
        suffix="%"
        label="Performance"
      />
    </div>

    <div class="jb-grid is-bars-grid has-mb">
      <div class="is-bars-container">
        <card-transaction-bar
          v-for="(transaction,index) in transactionBarItems"
          :key="index"
          :amount="transaction.amount"
          :date="transaction.date"
          :business="transaction.business"
          :type="transaction.type"
          :name="transaction.name"
          :account="transaction.account"/>
      </div>
      <div class="is-bars-container">
        <card-client-bar
          v-for="client in clientBarItems"
          :key="client.id"
          :name="client.name"
          :login="client.login"
          :date="client.created"
          :progress="client.progress"/>
      </div>
    </div>

    <title-sub-bar :icon="mdiChartPie" title="Trends overview"/>

    <card-component
      title="Performance"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="has-mb"
      @header-icon-click="fillChartData"
    >
      <div v-if="chartData">
        <line-chart :data="chartData" class="jb-line-chart-large"/>
      </div>
    </card-component>

    <title-sub-bar :icon="mdiAccountMultiple" title="Clients"/>

    <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification>

    <card-component :icon="mdiMonitorCellphone" title="Responsive table" has-table>
      <clients-table />
    </card-component>
  </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config'
import LineChart from '@/components/Charts/LineChart'
import MainSection from '@/components/MainSection'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import CardWidget from '@/components/CardWidget'
import CardComponent from '@/components/CardComponent'
import ClientsTable from '@/components/ClientsTable'
import Notification from '@/components/Notification'
import JbButton from '@/components/JbButton'
import CardTransactionBar from '@/components/CardTransactionBar'
import CardClientBar from '@/components/CardClientBar'
import TitleSubBar from '@/components/TitleSubBar'

export default {
  name: 'Home',
  components: {
    TitleSubBar,
    MainSection,
    ClientsTable,
    LineChart,
    CardComponent,
    CardWidget,
    HeroBar,
    TitleBar,
    Notification,
    JbButton,
    CardTransactionBar,
    CardClientBar
  },
  setup () {
    const titleStack = ref(['Admin', 'Dashboard'])

    const chartData = ref(null)

    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData()
    }

    onMounted(() => {
      fillChartData()
    })

    const store = useStore()

    const clientBarItems = computed(() => store.state.clients.slice(0, 3))

    const transactionBarItems = computed(() => store.state.history.slice(0, 3))

    const darkMode = computed(() => store.state.darkMode)

    return {
      titleStack,
      chartData,
      fillChartData,
      clientBarItems,
      transactionBarItems,
      darkMode,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie
    }
  }
}
</script>
