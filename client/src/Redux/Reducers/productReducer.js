import {createSlice} from "@reduxjs/toolkit"

const productslice=createSlice({
    name:"product",
    initialState:{
        productlength:0
    },
    reducers:{
        showProductdata:(state,action)=>{
            state.productlength=action.payload
        }
    }
})

export const {showProductdata} = productslice.actions
export default productslice.reducer