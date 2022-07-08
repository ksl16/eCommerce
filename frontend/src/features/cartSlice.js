import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartTotalQuantity:0,
  cartTotalPrice:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let cartIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      //console.log("newCartItem", newCartItem);
      if(cartIndex >= 0){
         state.cartItems[cartIndex].cartQuentity += 1;
        //console.log("newCartItem", newCartItem);
        //state.cartItems = [...state.cartItems, action.payload];
        toast.info(`Increase ${state.cartItems[cartIndex].title} quantity`, {
          position: "top-right",
        });
      }else{
        const tempProduct = {...action.payload, cartQuentity:1}
        state.cartItems = [...state.cartItems, tempProduct];

        toast.success(`${tempProduct.title} added to Cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearAllCartItems: (state) => {
      state.cartItems=[];
      localStorage.removeItem('cartItems');
    },
    removeFromCart:(state, action) => {
      const result = state.cartItems.filter(items => items.id !== action.payload);
      //console.log("result", result);
      state.cartItems = [...result];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCart:(state, action) => {
     //console.log(state, action.payload);
     const findIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
     if(state.cartItems[findIndex].cartQuentity > 1){
       state.cartItems[findIndex].cartQuentity -= 1;
     }else if(state.cartItems[findIndex].cartQuentity === 1){
         //alert('remove producut');
         const filterProdcut = state.cartItems.filter(item => item.id !== action.payload.id);
         state.cartItems = [...filterProdcut];
     }
     localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    subtotal:(state) => {
      const sumWithInitial = state.cartItems.reduce(
        (total, item) => total + (item.price * item.cartQuentity),
        0
      );
      //console.log(sumWithInitial);
      state.cartTotalPrice = sumWithInitial
    },
    cartQuantity:(state) => {
      const sumWithquan = state.cartItems.reduce(
        (total, item) => total + item.cartQuentity,
        0
      );
      state.cartTotalQuantity = sumWithquan
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearAllCartItems, removeFromCart, decreaseCart, subtotal, cartQuantity } = cartSlice.actions;

export default cartSlice.reducer;