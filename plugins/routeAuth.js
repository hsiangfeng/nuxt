export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    let requiresAuth = false
    if (typeof app.store.state.requiresAuth === 'boolean') {
      requiresAuth = app.store.state.requiresAuth
    }
    console.log('router', requiresAuth)
    return next()
  })
}
