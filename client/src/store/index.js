import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import favoritesReducer from './reducers/favorites'
import moviesReducer from './reducers/movies'

const reducer = combineReducers({
  favoritesReducer,
  moviesReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store