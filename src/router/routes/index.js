export default {
  path: '/',
  component: () => import('@/layouts/defaultLayout.vue'),
  children: [
    {
      meta: {
        title: 'Plantillas'
      },
      path: '/',
      name: 'templates',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tables" */ '@/views/TemplatesView.vue')
    },
    {
      meta: {
        title: 'Render'
      },
      path: '/render',
      name: 'render',
      component: () =>
        import(/* webpackChunkName: "forms" */ '@/views/RenderView.vue')
    },
    {
      meta: {
        title: 'Profile'
      },
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue')
    },
    {
      path: '/full-page',
      component: () =>
        import(/* webpackChunkName: "full-page" */ '@/views/FullPageView.vue'),
      children: [
        {
          meta: {
            title: 'Login',
            isPublic: true
          },
          path: '/login',
          name: 'login',
          component: () =>
            import(
              /* webpackChunkName: "full-page" */ '@/views/full-page/LoginView.vue'
            )
        }
      ]
    }
  ]
}
