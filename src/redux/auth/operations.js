import { axios } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";


export const register = createAsyncThunk("auth/register",
    async (newUser, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", newUser)
        axios.defaults.headers.common["Autorization"] = `Bearer ${response.data.token}`;
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
 
export const logIn = createAsyncThunk("auth/login",
    async (userInfo, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", userInfo)
            axios.defaults.headers.common["Autorization"] = `Bearer ${response.data.token}`;
            return response.data;
    } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
    }
    })

    export const logOut = createAsyncThunk("auth/logout", 
        async (_, thunkAPI) => {
            
            try { 
                    const response = await axios.post("/users/logout")
                
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    )
