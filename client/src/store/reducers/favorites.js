import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions/types'

const initialState = {
  favorite: []
}
let isFound

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      isFound = false
      state.favorite.map(movie => {
        if(movie === action.payload) isFound = true
      })
      if(!isFound){
        return { ...state, favorite: state.favorite.concat(action.payload) }
      }
      return state
      break;
    case REMOVE_FROM_FAVORITE:
      isFound = false
      let targetIndex = null
      state.favorite.map((movie, idx) => {
        if(movie === action.payload) {
          isFound = true
          targetIndex = idx
        }
      })
      if(isFound){
        return { ...state, favorite: state.favorite.splice(targetIndex) }
      }
      return state
      break;
    default:
      return state;
  }
}