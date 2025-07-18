import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/Cart/cartSlice'
import {productApi} from '../services/products/products'
import LoginApiReducer, {LoginApi} from "../services/login/login.js";
import loginReducer from "../features/Login/loginSlice.js";


const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined; // If no state in localStorage, return undefined (fallback to initialState)
  } catch (error) {
    console.error("Could not load cart state from localStorage:", error);
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (error) {
    console.error("Could not save cart state to localStorage:", error);
  }
};

// const persistedCartState = loadCartState();

const store = configureStore({
    reducer:{
        cart: cartReducer,
        login: loginReducer,
        [productApi.reducerPath] :productApi.reducer,
        [LoginApi.reducerPath]:LoginApiReducer,
    },
    preloadedState:{
        cart:loadCartState(),

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware).concat(LoginApi.middleware),
});

store.subscribe(()=>{
    saveCartState(store.getState().cart);
});

export default store;
