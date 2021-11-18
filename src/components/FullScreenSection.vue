<template>
  <main-section :class="componentClass">
    <slot card-class="is-fullscreen-card" card-rounded="is-rounded-lg" />
  </main-section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MainSection from '@/components/MainSection'

export default {
  name: 'FullScreenSection',
  components: {
    MainSection
  },
  props: {
    bg: String
  },
  setup (props) {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const componentClass = computed(() => {
      const bgs = {
        login: 'is-login-section',
        loginDark: 'is-login-dark-section',
        error: 'is-error-section',
        errorDark: 'is-error-dark-section'
      }

      const bgKey = darkMode.value ? `${props.bg}Dark` : props.bg

      return bgs[bgKey] ?? ''
    })

    return {
      componentClass
    }
  }
}
</script>
