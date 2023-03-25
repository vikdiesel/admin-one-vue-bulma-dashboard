import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/cookies'
import store from '@/store'
import mainRoutes from './routes'

Vue.use(Router)

const routes = [mainRoutes, { path: '*', redirect: '/404' }]

const router = new Router({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const token = getToken()

  if (token) {
    if (to.path === '/login' || to.path === '/register') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      try {
        // get user info
        // await store.dispatch('users/verifyToken')
        // await store.dispatch('users/getUser')
        next()
      } catch (error) {
        console.log(error)
        // remove token and go to login page to re-login
        await store.dispatch('users/logout')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    /* has no token */
    if (to.meta.isPublic) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
