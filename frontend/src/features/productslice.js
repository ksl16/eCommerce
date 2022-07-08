import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const initialState = {
  productItems: [],
  categories:[],
  status: null
}

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await axios.get(`${baseUrl}/products`);
        //console.log("response", response);
        return response?.data
    }
);

export const fetchAllCats = createAsyncThunk(
    "product/fetchAllCats",
    async() => {
      try {
      const responseCat = await axios.get(`${baseUrl}/categories`);
      //console.log("responseCat", responseCat);
      return responseCat?.data
      } catch (error) {
        console.log("caterror", error);
      }
    }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fetchProducts.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending"
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        // Add user to the state array
        state.status = "fulfilled"
        state.productItems = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
        // Add user to the state array
        state.status = "rejected"
    })
    .addCase(fetchAllCats.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending"
    })
    .addCase(fetchAllCats.fulfilled, (state, action) => {
      // Add user to the state array
      state.status = "fulfilled"
      state.categories = action.payload
    })
    .addCase(fetchAllCats.rejected, (state, action) => {
        // Add user to the state array
        state.status = "rejected"
    })
  },
});

// Action creators are generated for each case reducer function
//export const {  } = productSlice.actions

export default productSlice.reducer