import rootReducer from './reducers'
import middlewares from './middlewares'
import { createStore } from 'redux'

const store = createStore(rootReducer, middlewares)

export default store