export default {
  path: '/',
  component: () => import('@/layouts/defaultLayout.vue'),
  children: [
    {
      // Document title tag
      // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
      meta: {
        title: 'Dashboard'
      },
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "tables" */ '@/views/HomeView.vue')
    },
    {
      meta: {
        title: 'Plantillas'
      },
      path: '/tables',
      name: 'tables',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tables" */ '@/views/TemplatesView.vue')
    },
    {
      meta: {
        title: 'Formulario'
      },
      path: '/forms',
      name: 'forms',
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
      meta: {
        title: 'New Client'
      },
      path: '/client/new',
      name: 'client.new',
      component: () =>
        import(/* webpackChunkName: "client-form" */ '@/views/ClientFormView.vue')
    },
    {
      meta: {
        title: 'Edit Client'
      },
      path: '/client/:id',
      name: 'client.edit',
      component: () =>
        import(
          /* webpackChunkName: "client-form" */ '@/views/ClientFormView.vue'
        ),
      props: true
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
