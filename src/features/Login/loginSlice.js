import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: false,
    authToken: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setToken: (state, action) => {
            state.authToken = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const {setLogin,setToken} = loginSlice.actions;