import { ADD_TO_FAVORITE } from '../actions/types'

const initialState = {
  favorite: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      let isFound = false
      state.favorite.map(movie => {
        if(movie === action.payload) isFound = true
      })
      if(!isFound){
        return { ...state, favorite: state.favorite.concat(action.payload) }
      }
    default:
      return state;
  }
}