import {createSlice} from "@reduxjs/toolkit"

const userslice = createSlice({
    name:"user",
    initialState:{
        userdata:{}
    },

    reducers:{
        loggedUser:(state,action)=>{
            state.userdata=action.payload
        }
    }
})

export const {loggedUser}= userslice.actions
export default userslice.reducer