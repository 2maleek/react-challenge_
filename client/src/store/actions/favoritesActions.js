// import { ADD_TO_FAVORITE } from './types'

export function addToFavorite( movieId ) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: movieId
    })
  }
}

export function removeFromFavorite( movieId ) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: movieId
    })
  }
}

