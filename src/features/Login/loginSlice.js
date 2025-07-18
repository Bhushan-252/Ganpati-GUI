import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    login: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const {setLogin} = loginSlice.actions;