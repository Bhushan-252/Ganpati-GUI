import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      name: 'Ganpti Bappa Morya',
      price: 1200,
      type: 'Shadu Soil clay',
      quantity: 1,
      maxQuantity: 3
    },
    {
      id: 2,
      name: 'Jay ganish idol',
      price: 2300,
      type: 'Paper clay',
      quantity: 1,
      maxQuantity: 4
    }
  ],
  totalQuantity: 2,
  totalPrice: 1200 + 2300
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (!state.items.some(item  => item.id === action.payload.id)) {
        state.items.push(action.payload)
        state.totalQuantity++
        state.totalPrice += action.payload.price
      }
    },
    removeCart: (state, action) => {
      const temp = state.items.find(item => item.id === action.payload)
      state.items = state.items.filter(e => e.id !== action.payload)
      state.totalQuantity -= temp.quantity
      state.totalPrice -= temp.price * temp.quantity
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload
      const temp = state.items.find(item => item.id === id)
      if (temp.maxQuantity > 0) {
        temp.quantity++
        state.totalQuantity++
        state.totalPrice += temp.price
        temp.maxQuantity--
      }
      // console.log(action.payload)
    },
    decreaseItemQuantity: (state, action) => {
      const id = action.payload
      const temp = state.items.find(item => item.id === id)
      temp.quantity--
      temp.maxQuantity++
      if (temp.quantity <= 0) {
        state.items = state.items.filter(item => item.id != temp.id)
      }
      state.totalQuantity--
      state.totalPrice -= temp.price
    }
  }
})

export const {
  addCart,
  removeCart,
  increaseItemQuantity,
  decreaseItemQuantity
} = cartSlice.actions
export default cartSlice.reducer
