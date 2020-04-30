import { ADD_TO_FAVORITE } from './types'

export function addToFavorite( favorite ) {
  return {
    type: ADD_TO_FAVORITE,
    payload: favorite
  }
}