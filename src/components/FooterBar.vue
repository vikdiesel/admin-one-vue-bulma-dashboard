<template>
  <footer v-show="isFooterBarVisible" class="jb-footer">
    <level>
      <div class="footer-text-wrap">
        <b>&copy; {{ year }}, <a href="https://justboil.me/" target="_blank">JustBoil.me</a>.</b>
        Get more with <a href="https://justboil.me/bulma-admin-template/one/" class="is-link" target="_blank">Premium version</a>
      </div>
      <div class="footer-logo-wrap">
        <a href="https://justboil.me">
          <jb-logo class="footer-logo" />
        </a>
      </div>
    </level>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level'
import JbLogo from '@/components/JbLogo'

export default {
  name: 'FooterBar',
  components: {
    Level,
    JbLogo
  },
  setup () {
    const store = useStore()

    const year = computed(() => new Date().getFullYear())

    const isFooterBarVisible = computed(() => !store.state.isFullScreen)

    return {
      year,
      isFooterBarVisible
    }
  }
}
</script>
