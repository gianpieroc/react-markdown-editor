
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { loadState, saveState } from './localStorage'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import throttle from 'lodash/throttle'

export const history = createHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const persistedState = loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composedEnhancers
)

store.subscribe(throttle(() => {
  saveState({ input: store.getState().input })
}, 1000))

export default store
