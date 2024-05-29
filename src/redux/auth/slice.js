import { createSlice } from "@reduxjs/toolkit";
import { logout, refreshUser, register, login } from "./operations";

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
        loading: false,
        error: null,
    },

    extraReducers: builder =>
        builder
            .addCase(register.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase((register.fulfilled), (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state) => {
            state.error = true;
            state.loading = false;
            })
            .addCase(login.pending, (state) => {
            state.error = false;
            state.loading = true;
      })
            .addCase((login.fulfilled), (state, action ) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, state => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;

            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }),
})
        

export const authReducer =  authSlice.reducer;