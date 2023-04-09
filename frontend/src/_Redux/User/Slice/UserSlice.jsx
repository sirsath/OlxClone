import { createSlice } from "@reduxjs/toolkit";
import { UserLoginAction, UserSingUpAction } from "../Action/UserAction";
const localloginData =localStorage.getItem("userlogin") ? JSON.parse(localStorage.getItem("userlogin")) : null
 export const UserSlice = createSlice({

    name : "UserData",
    initialState : { user : [] , UserLogin : localloginData?.UserLogin },
    reducers : {
       logOut(state){
              state.UserLogin = null 
              localStorage.removeItem("userlogin")
       }
    },
    extraReducers:(builder)=>{
        builder 
        .addCase(UserLoginAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(UserLoginAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.UserLogin = payload
        })
        .addCase(UserLoginAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(UserSingUpAction.pending,(state,{payload})=>{
              state.loading = true
       })
       .addCase(UserSingUpAction.fulfilled,(state,{payload})=>{
              state.loading = false
              state.UserSingUp = payload
       })
       .addCase(UserSingUpAction.rejected,(state,{payload})=>{
              state.loading = false
       })
    }
})
 
export const {logOut} = UserSlice.actions
export default UserSlice.reducer
