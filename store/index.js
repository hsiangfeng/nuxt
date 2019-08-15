export const state = () => ({
  requiresAuth: false
})

export const mutations = {
  SET_REQUIRESAUTH (state, requiresAuth) {
    state.requiresAuth = requiresAuth
  }
}
