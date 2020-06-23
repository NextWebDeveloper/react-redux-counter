const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'RND':
      return state + action.payload

    case 'DEC':
      return --state

    case 'INC':
      return ++state
    
    default:
      return state
  }
}

export default reducer;