import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import input from './input'

export default combineReducers({
  routing: routerReducer,
  input
})
