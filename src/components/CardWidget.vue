<template>
  <card-component>
    <level v-if="trend" class="has-space" mobile>
      <trend-pill :trend="trend" :trend-type="trendType" small />
      <jb-button
        :icon="mdiCog"
        :color="darkMode ? 'white' : 'light'"
        :outline="darkMode"
        small
      />
    </level>
    <level mobile>
      <div>
        <h3 class="jb-card-widget-label">
          {{ label }}
        </h3>
        <h1 class="jb-card-widget-number">
          <growing-number :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
      </div>
      <icon v-if="icon" :path="icon" size="48" class="is-card-widget-icon" :class="color" />
    </level>
  </card-component>
</template>

<script>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import { useStore } from 'vuex'
import CardComponent from '@/components/CardComponent'
import GrowingNumber from '@/components/GrowingNumber'
import Icon from '@/components/Icon'
import Level from '@/components/Level'
import TrendPill from '@/components/TrendPill'
import JbButton from '@/components/JbButton'

export default {
  name: 'CardWidget',
  components: { JbButton, GrowingNumber, CardComponent, Icon, Level, TrendPill },
  props: {
    number: {
      type: Number,
      default: 0
    },
    icon: String,
    prefix: String,
    suffix: String,
    label: String,
    color: String,
    trend: String,
    trendType: String
  },
  setup () {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    return {
      darkMode,
      mdiCog
    }
  }
}
</script>
