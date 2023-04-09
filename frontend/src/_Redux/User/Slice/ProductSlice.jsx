import { createSlice } from "@reduxjs/toolkit";
import { AddProductAction, getProductAction, SinglegetProductAction } from "../Action/ProductAction";

 export const ProductSlice = createSlice({
    name : "UserData",
    initialState : { getproduct : [] , getsingleproduct : []},
    reducers : {},
    extraReducers:(builder)=>{
        builder 
        .addCase(getProductAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(getProductAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.getproduct = payload
        })
        .addCase(getProductAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(SinglegetProductAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(SinglegetProductAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.getsingleproduct = payload
        })
        .addCase(SinglegetProductAction.rejected,(state,{payload})=>{
               state.loading = false
        })
        .addCase(AddProductAction.pending,(state,{payload})=>{
               state.loading = true
        })
        .addCase(AddProductAction.fulfilled,(state,{payload})=>{
               state.loading = false
               state.addproduct = payload
        })
        .addCase(AddProductAction.rejected,(state,{payload})=>{
               state.loading = false
        })
    }
})

export default ProductSlice.reducer
