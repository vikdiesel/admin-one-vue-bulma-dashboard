export default [
  'General',
  [
    {
      to: '/',
      icon: 'desktop-mac',
      label: 'Dashboard'
    }
  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: 'table',
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: 'square-edit-outline'
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: 'account-circle'
    },
    {
      to: '/login',
      label: 'Login',
      icon: 'lock'
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: 'view-list',
      menu: [
        {
          href: '#void',
          label: 'Sub-item One'
        },
        {
          href: '#void',
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://admin-one.justboil.me',
      label: 'Premium Demo',
      icon: 'credit-card'
    },
    {
      href: 'https://github.com/vikdiesel/admin-one-vue-bulma-dashboard',
      label: 'About',
      icon: 'help-circle'
    }
  ]
]
