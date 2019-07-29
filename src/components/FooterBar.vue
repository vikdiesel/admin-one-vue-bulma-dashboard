<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            &copy; {{ year }}, JustBoil.me
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="https://justboil.me">
                <img src="../assets/justboil-logo.svg" alt="JustBoil.me"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    year () {
      return moment().year()
    },
    ...mapState([
      'isFooterBarVisible'
    ])
  }
}
</script>
