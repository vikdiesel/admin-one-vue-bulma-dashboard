<template>
  <footer
    v-show="isFooterBarVisible"
    class="footer"
  >
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="footer-copyright">
              <b>&copy; {{ year }}, JustBoil.me</b> &mdash; Admin One Demo
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="https://justboil.me">
                <img
                  src="../assets/justboil-logo.svg"
                  alt="JustBoil.me"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    year () {
      return new Date().getFullYear()
    },
    ...mapState(['isFooterBarVisible'])
  }
}
</script>
