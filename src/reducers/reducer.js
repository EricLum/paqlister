export default function myReducer(
  state = {items: [], manifests: [], selectedManifest: null, loading: false, currentItem: null},
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
    default:
      return state
  }
}
