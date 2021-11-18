<template>
  <section class="jb-hero-bar">
    <level>
      <h1>
        <slot />
      </h1>
      <jb-button
        :label="darkMode ? 'Light Mode' : 'Dark Mode'"
        :icon="mdiThemeLightDark"
        :outline="darkMode"
        @click="darkModeToggle"
      />
    </level>
  </section>
</template>

<script>
import { mdiThemeLightDark } from '@mdi/js'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Level from '@/components/Level'
import JbButton from '@/components/JbButton'

export default {
  name: 'HeroBar',
  components: {
    Level,
    JbButton
  },
  setup () {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const darkModeToggle = () => {
      store.dispatch('darkMode')
    }

    return {
      darkMode,
      darkModeToggle,
      mdiThemeLightDark
    }
  }
}
</script>
