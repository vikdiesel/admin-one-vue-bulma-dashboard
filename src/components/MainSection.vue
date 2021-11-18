<template>
  <section
    class="jb-section"
    :class="[ isFullScreen ? 'is-fullscreen' : 'is-default' ]"
  >
    <slot/>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainSection',
  setup () {
    const store = useStore()

    const isFullScreen = computed(() => store.state.isFullScreen)

    return {
      isFullScreen
    }
  }
}
</script>
