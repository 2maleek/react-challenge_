import { createStore, combineReducers } from 'redux'
import messagesReducer from "./reducers/messages"
import favoritesReducer from './reducers/favorites'

const reducer = combineReducers({
  messagesReducer,
  favoritesReducer
})
const store = createStore(reducer)

export default store