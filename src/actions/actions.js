
//These are action creators.
// these make the things that will be dispatched out.
export function addItem(thing){
  return {
    type: 'ADD_ITEM'
  }
}

export function saveCollections(){
  return {
    type: 'SAVE_COLLECTION'
  }
}
