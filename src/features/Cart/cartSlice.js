import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
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
