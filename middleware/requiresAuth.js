export default ({ route, store }) => {
  // Take the last value (latest route child)
  const requiresAuth = route.meta.reduce((res, meta) => {
    return (res.requiresAuth ? res.requiresAuth : false)
  })
  store.commit('SET_REQUIRESAUTH', requiresAuth)
}
