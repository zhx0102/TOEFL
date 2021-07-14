export default {
    REQUESTING(state) {
        state.firstView = false
        state.loading = true
    },
    REQ_SUCCESS(state, {
        users
    }) {
        state.loading = false
        state.users = users
    },
    // 请求失败
  REQ_ERROR (state, {errorMsg}) {
    state.loading = false
    state.errorMsg = errorMsg
  }
}