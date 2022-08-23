import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Reducers/cartReducer"

export default configureStore({
    reducer:{
        cart:cartReducer,
    },
})