import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Reducers/cartReducer"
import productReducer from "./Reducers/productReducer"
import userReducer from "./Reducers/userReducer"

export default configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        user:userReducer,
    },
})