export default function myReducer(
  state = {items: [], manifests: [], manifestItems: [], isLoading: false},
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
    default:
      return state
  }
}
