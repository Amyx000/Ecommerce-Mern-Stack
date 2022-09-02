import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Reducers/cartReducer"
import productReducer from "./Reducers/productReducer"

export default configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer
    },
})