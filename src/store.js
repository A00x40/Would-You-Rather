import rootReducer from './reducers'
import middlewares from './middlewares'
import { createStore } from 'redux'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = createStore(persistedReducer, middlewares);
 
export const persistor = persistStore(store);

export default store

