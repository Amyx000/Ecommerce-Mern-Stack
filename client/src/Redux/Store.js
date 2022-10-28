import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import cartReducer from "./Reducers/cartReducer"
import productReducer from "./Reducers/productReducer"
import userReducer from "./Reducers/userReducer"
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"


const persistConfig = {
    key: "root",
    storage
}
const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})