import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root.reducer'

// set all middlewares inside an arr
const middlewares = [logger]

// create the store from the root reducer, adding all mid-wares
const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
)

export default store