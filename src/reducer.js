const rootReducer = (state, action) => {
  switch(action.type) {
    case('TOGGLE_MODAL'):
      return { isOpen: !state.isOpen }
    default:
      return { isOpen: false }
  }
}
export default rootReducer