import { createSlice } from "@reduxjs/toolkit";
import { logOut, register } from "./operations";
import { logIn } from "./operations";
const authSlice = createSlice({
    name: "auth",
    initialState: {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    },
})

extraReducers: builder =>
    builder.addCase((register.fulfilled), (state, action) => {
        state.user = state.payload.user;
        state.token = state.payload.token;
        state.isLoggedIn = true;
    })
        .addCase((logIn.fulfilled), (state, action) => {
        state.user = state.payload.user;
        state.token = state.payload.token;
        state.isLoggedIn = true;
        })
        .addCase((logOut.fulfilled), (state) => {
            state.user = {
                            name: null,
                            email: null,
            };
            state.token = null;
            state.isLoggedIn = false;

        })

export const authReducer =  authSlice.reducer;