// authActions.js
import axiosInstance from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAccessToken, RootState } from "./authSlice";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (
        { name, email, password, phoneNumber, surname }: any,
        { rejectWithValue }
    ) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axiosInstance.post(
                `api/register`,
                { name, email, password, phoneNumber, surname },
                config
            );
            if (!data.success) throw new Error(data.error);

            return "success";
        } catch (error: any) {
            // return custom error message from backend if present

            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ email, password }: any, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON

            const { data, headers } = await axiosInstance.post(`api/login`, {
                email,
                password,
            });
            // store user's token in local storage

            const token = data.token;

            const result = await axiosInstance.get(`api/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const user = result.data;

            return { token, user, data };
        } catch (error: any) {
            // return custom error message from API if any

            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
export const userLogout = createAsyncThunk(
    "auth/logout",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = getAccessToken(state);

            const bearerConfig = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axiosInstance.get("api/logout", bearerConfig);

            return response.data;
        } catch (error: any) {
            // Handle any potential errors during logout
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUser = createAsyncThunk(
    "auth/profile",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = getAccessToken(state);

            const bearerConfig = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axiosInstance.get("api/profile", bearerConfig);
            return response.data;
        } catch (error: any) {
            // Handle any potential errors during logout
            return rejectWithValue(error.message);
        }
    }
);
