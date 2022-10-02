import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        subtotal:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.subtotal += action.payload.price;
            state.total = Math.round(state.subtotal*1.09)
        },
        removeProduct:(state,action)=>{
            state.quantity -= 1;
            state.products =state.products.filter((item)=>item._id!==action.payload.product);
            state.subtotal -= action.payload.price;
            state.total -= action.payload.price*1.09;
        },
        emptycart:(state,action)=>{
            state.quantity=0;
            state.products=[]
            state.subtotal=0;
            state.total=0;
        }
    }
})

export const {addProduct, removeProduct, emptycart} = cartSlice.actions
export default cartSlice.reducer