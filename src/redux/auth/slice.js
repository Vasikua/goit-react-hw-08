import { createSlice } from "@reduxjs/toolkit";
import { logOut, refreshUser, register, logIn } from "./operations";

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

    extraReducers: builder =>
        builder.addCase((register.fulfilled), (state,action) => {
            state.user = action.payload.user;
            state.token = state.payload.token;
            state.isLoggedIn = true;
        })
            .addCase((logIn.fulfilled), state  => {
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

            }).addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            }).addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }),
})
        

export const authReducer =  authSlice.reducer;