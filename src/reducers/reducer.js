export default function myReducer(
  state = {items: [], manifests: [], manifestItems: [], isLoading: false, user: {}},
  action
) {
  switch (action.type){
    case 'ADD_MANIFEST':
      let currentManifest = state.manifests.slice();
      currentManifest.push(action.manifest)
      return Object.assign({}, state, {manifests: currentManifest})
    case 'GET_MANIFEST':
      let currentManifests = state.manifests.slice();
      currentManifests = action.manifests
      return Object.assign({},state, {manifests: currentManifests})
    case 'GET_MANIFEST_ITEMS':
      let currentItems = state.items.slice();
      currentItems = action.items
      return Object.assign({}, state, {items: currentItems})
    case 'GET_MANIFEST_ITEM_POSITIONS':
      // this exists because items are in a different table than manifestItems store the position of the item for the current manifest.
      let manifestItems = state.manifestItems.slice();
      manifestItems = action.manifestItems
      return Object.assign({}, state, {manifestItems: manifestItems})
    case 'ITEMS_ARE_LOADING':
      return Object.assign({}, state, {isLoading: action.isLoading})
    case 'ADD_MANIFEST_ITEM':
      let curManifestItems = state.items.slice();
      curManifestItems.push(action.item)
      return Object.assign({}, state, {items: curManifestItems})
    case 'USER_LOGIN':
      return Object.assign({}, state, {user: action.user})
    case 'USER_LOGOUT':
      localStorage.removeItem('token')
      return Object.assign({}, state, {user: {}})
    case 'DELETE_ITEM':
      // remove item from state
      let filteredItems = state.items.slice()
      let filteredItems2=filteredItems.filter((item) => {
        return item.id !== action.itemId
      })
      debugger
      let filteredManifestItems = state.items.slice()
      let filteredManifestItems2 = filteredManifestItems.filter((mItem) => {
        return mItem.item_id !== action.itemId
      })
      return Object.assign({}, state, {items: filteredItems2}, {manifestItems: filteredManifestItems2})
    default:
      return state
  }
}
