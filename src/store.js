import rootReducer from './reducers'
import middlewares from './middlewares'
import { createStore } from 'redux'
import { persistStore, persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = {
    key: "root",
    storage: storageSession
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = createStore(persistedReducer, middlewares);
 
export const persistor = persistStore(store);

export default store

