import{createAsyncThunk} from "@reduxjs/toolkit"
import api from "../../api"

export const UserLoginAction = createAsyncThunk("UserLogin" ,async( loginData , {rejectWithValue , getState}) =>{
    try {
    const {data} = await api.post("/user/login" , loginData)
    localStorage.setItem("userlogin", JSON.stringify({ UserLogin: data.result }))
     return data.result
    } catch (error) {
      rejectWithValue(error.massage)
    } 
  })
  
export const UserSingUpAction = createAsyncThunk("UserSingUp" ,async( SingUpData , {rejectWithValue , getState}) =>{
  console.log(SingUpData)
    try {
    const {data} = await api.post("/user/register" , SingUpData)
     return data
    } catch (error) {
      rejectWithValue(error.massage)
    } 
  })

  
