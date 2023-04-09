import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "./User/Slice/ProductSlice"
import UserSlice from "./User/Slice/UserSlice"

const store = configureStore({
    reducer: {
        alluser : UserSlice,
        allproducts : ProductSlice
    }
})
export default store