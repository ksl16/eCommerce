import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cats: [],
  prices:''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    checkOrNot: (state, action) => {
      //console.log("action", action.payload.target.value);
      const {value, checked} = action.payload.target;
      //console.log(`${value} is ${checked}`);
      if(checked === true){
        //state.cats = action.payload.value
        //console.log(action.payload.value);
        state.cats = [...state.cats, value]
      }else if(checked === false){
        state.cats = state.cats.filter((e)=> e !== value);
      }
    },
    slideRange: (state,action) => {
      console.log("action", action.payload.target.value);
      state.prices = action.payload.target.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { checkOrNot, slideRange } = filterSlice.actions

export default filterSlice.reducer