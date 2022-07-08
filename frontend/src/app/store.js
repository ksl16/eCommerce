import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from '../services/product';
import cartReducer, { cartQuantity, subtotal } from "../features/cartSlice";
import productReducer, { fetchAllCats, fetchProducts } from "../features/productslice";
import authReducer from "../features/authSlice";
import filterReducer from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    product:productReducer,
    cart:cartReducer,
    auth:authReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productApi.middleware),
   
});
store.dispatch(fetchAllCats());
store.dispatch(fetchProducts());
store.dispatch(subtotal());
store.dispatch(cartQuantity());
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)