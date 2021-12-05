/* Styles */
import '@/scss/main.scss'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'
import VueCompositionAPI from '@vue/composition-api'

/* Router & Store */
import router from './router'
import store from './store'

/* Vue. Main component */
import App from './App.vue'

/* Composition API */
Vue.use(VueCompositionAPI)

/* Fetch sample data */
store.dispatch('fetch', 'clients')

/* Default title tag */
const defaultDocumentTitle = 'Admin One Bulma Buefy'

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
