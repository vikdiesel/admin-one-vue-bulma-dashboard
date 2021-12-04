/* Styles */
import '@/scss/main.scss'

/* Core */
import { createApp } from 'vue'
import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from '@oruga-ui/theme-bulma'
// import Buefy from 'buefy'
// import VueCompositionAPI from '@vue/composition-api'

/* Router & Store */
import router from './router'
import store from './store'

/* Service Worker */
// import './registerServiceWorker'

/* Vue. Main component */
import App from './App.vue'

/* Composition API */
// Vue.use(VueCompositionAPI)

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

// Vue.config.productionTip = false

// Vue.use(Buefy)

createApp(App)
  .use(store)
  .use(router)
  .use(Oruga, bulmaConfig)
  .mount('#app')
