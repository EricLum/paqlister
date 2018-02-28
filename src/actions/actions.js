
//These are action creators.
// these make the things that will be dispatched out.
export function addItem(item){
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function saveCollections(){
  return {
    type: 'SAVE_COLLECTION'
  }
}

export function addManifest(manifest){
  return {
    type: 'ADD_MANIFEST',
    manifest
  }
}

export function loadInitialManifest(manifests){
  return {
    type: 'GET_MANIFEST',
    manifests
  }
}

export function onChangeNewManifest(manifestFormData){
  return {
    type: 'CHANGE_MANIFEST',
    manifestFormData
  }
}

export function setCollection(){
  return {
    type:'SET_COLLECTION'
  }
}

export function saveItem(item){
  return (dispatch) => {
    fetch()
  }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        // dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                // dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => items)
            // .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsPostData(url, item) {
  return (dispatch) => {
    let headers = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      item: item
      })
    }
    fetch(url, headers)
    .then((response) => {
      return response
    })
    .then((response) => response.json())
    .then((items) => items)
  };
}

export function manifestPostData(url, manifest) {

  return (dispatch) => {
    let headers = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      manifest
      })
    }
    fetch(url, headers)
    .then((response) => {
      return response
    })
    .then((response) => response.json())
    .then( (json) => dispatch({
      type: 'ADD_MANIFEST',
      manifest: json
    }))
  };
}

export function getManifestData(url){
  return (dispatch) => {
    fetch(url)
    .then( (response) => {
      return response
    }).then((response) => response.json())
    .then( (json) => dispatch(loadInitialManifest(json)))
  }
}

export function loadManifestItems(url, manifestId){
  let headers = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
    manifestId
    })
  }
  return (dispatch) => {
    fetch(url,headers)
    .then( (response) => {
      return response
    }).then((response) => response.json())
    .then( (json) => dispatch({
      type: 'GET_MANIFEST_ITEMS',
      items: json
    }))
  }
}

export function loadManifestItemPositions(url,manifestId) {

  let headers = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
    manifestId
    })
  }

  return (dispatch) => {
    fetch(url,headers)
    .then( (response) => {
      dispatch(itemsAreLoading(true))
      return response
    }).then((response) => response.json())
    .then( (json) => dispatch({
      type: 'GET_MANIFEST_ITEM_POSITIONS',
      manifestItems: json
    })).then( () => {
      dispatch(itemsAreLoading(false))
    })
  }
}

export function saveManifestItemPosition(url,manifestItemId,itemId,x,y){
  let headers = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
    left_position: x,
    top_position: y,
    manifestItemId: manifestItemId,
    itemId: itemId
    })
  }
  return (dispatch) => {
    fetch(url,headers)
    .then( (response) => {
      return response
    }).then((response) => response.json())
  }
}

export function itemsAreLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}


// export function saveManifestItemPositions(url,manifestItems){
//   manifestItems.map( (item) => dispatch(saveManifestItemPositions('http://localhost:3001/api/v1/manifestitems/')))
//   )
// }
