<template>
  <section class="section hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo" />
    </div>
  </section>
</template>

<script>
import { onBeforeUnmount } from '@vue/composition-api'
import { useStore } from '@/store'

export default {
  name: 'FullPage',
  setup () {
    const store = useStore()

    store.dispatch('toggleFullPage', true)

    onBeforeUnmount(() => {
      store.dispatch('toggleFullPage', false)
    })
  }
}
</script>
