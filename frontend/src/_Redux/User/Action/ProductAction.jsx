import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getProductAction = createAsyncThunk(
  "productget",
  async (arg, { rejectWithValue, getState }) => {
    try {
      const { data } = await api.get("/product");
      console.log(data);
      return data.result;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);

export const SinglegetProductAction = createAsyncThunk(
  "singeleget",
  async (id, { rejectWithValue, getState }) => {
    try {
      const { data } = await api.get(`/product/${id}`);
      console.log(data);
      return data.result;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
export const AddProductAction = createAsyncThunk(
  "addproduct",
  async (productdata, { rejectWithValue, getState }) => {
    console.log(getState());
    try {
      const { data } = await api.post("/product/add", productdata, {
        headers: { authorization: getState().alluser.UserLogin.token },
      });
      console.log(data);
      return data 
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
