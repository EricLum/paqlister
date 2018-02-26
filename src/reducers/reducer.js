export default function myReducer(
  state = {items: [], manifests: [], selectedManifest: null, loading: false, currentItem: null},
  action
) {
  switch (action.type){
    case 'ADD_MANIFEST':
      let currentManifest = state.manifests.slice();
      currentManifest.push(action.manifest)
      return Object.assign({}, state, {manifests: currentManifest})
    case 'GET_MANIFESTS':
      let currentManifests = state.manifests.slice();
      currentManifests = action.manifests
      return Object.assign({},state, {manifests: currentManifests})
    case 'GET_ITEMS':
      return state
    case 'REMOVE_ITEM':
      return state
    case 'MOVE_ITEM':
      return state
    case 'ADD_ITEM':
      return state
    default:
      return state
  }
}
