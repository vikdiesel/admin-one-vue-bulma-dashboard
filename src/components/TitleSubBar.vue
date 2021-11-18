<template>
  <section class="jb-title-sub-bar">
    <div class="jb-title-sub-bar-label">
      <icon v-if="icon" :path="icon" class="is-title-sub-bar-icon"/>
      <h1>{{ title }}</h1>
    </div>
    <jb-button :icon="mdiCog" :outline="darkMode" small />
  </section>
</template>

<script>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import { useStore } from 'vuex'
import Icon from '@/components/Icon'
import JbButton from '@/components/JbButton'

export default {
  name: 'TitleSubBar',
  components: {
    Icon,
    JbButton
  },
  props: {
    icon: String,
    title: String
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
