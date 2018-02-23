function reducer(
  state = {items: {}, collections: {}, selectedCollection: null, loading: false, currentItem: null},
  action
) {
  switch (action.type){
    case 'SELECT_COLLECTION':
      return state
    case 'GET_COLLECTION':
      return state
    case 'GET_ITEMS':
      return state
    case 'REMOVE_ITEM':
      return state
    case 'MOVE_ITEM'
      return
    default:
      return state
  }
}

export default reducer
