module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/admin-null-vue-bulma-dashboard/'
    : '/'
}
