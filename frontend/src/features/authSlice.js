import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//import jwt_decode from "jwt-decode";
const auth_Url = process.env.REACT_APP_AUTH_URL;


//console.log("auth_url", auth_Url);
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
   user: user ? user : null,
   isError:false,
   isLoading:false,
   isSuccess:false,
   message:''
  
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async(user, thunkAPI) => {
        try {
            const userdata = await axios.post(`${auth_Url}/register`, user);
            localStorage.setItem('user', JSON.stringify(userdata.data));
            return userdata.data
        } catch (error) {
            //console.log("error", error.response.data);
            //console.log("thunkAPi", rejectWithValue);
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await axios.post(`${auth_Url}/login`, user)

        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
      
        return response.data
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  })

export const logOutUser = createAsyncThunk(
    'auth/logOutUser',
    async() => {
        try {
          await localStorage.removeItem('user');  
        } catch (error) {
          
        }
    }    
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
    })
    .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
        state.message = action.payload
        state.user = null
    })
    .addCase(login.pending, (state) => {
        state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
    })
    .addCase(logOutUser.fulfilled, (state) => {
        state.user = null
    })
  },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer