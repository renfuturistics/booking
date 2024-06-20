// authSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchUser, userLogin, userLogout } from "./authActions";
import { registerUser } from "./authActions";
import { HYDRATE } from "next-redux-wrapper"; // Import HYDRATE


// Define a RootState type representing the structure of your Redux store
export type RootState = {
    auth: {
        loading: boolean;
        userInfo: TUser | null;
        accessToken: string | null;
        logout: boolean;
        error: string | null;
        success: boolean;
        userAddress: TAddress[] | null;
    };
    // Other slices can be added here if you have them
};

const initialState: RootState["auth"] = {
    loading: false,
    userInfo: null,
    accessToken: null,
    logout: false,
    error: null,
    success: false,
    userAddress: null,
};

export type TAddress = {
    _id?: string;
    plot: string;
    area: string;
    town: string;
    street: string;
    province: string;
    contact: string;
};
type TUser = {
    _id: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    profilePic: { src: string } | null;
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.userInfo = payload;
        },
        updateAccessToken(state, { payload }) {
            state.accessToken = payload.token;
        },

        reset: (state) => {
            state.accessToken = null;
            state.error = null;
            state.loading = false;
            state.logout = true;
            state.success = false;
            state.userInfo = null;
            state.userAddress = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            if (action.payload.auth.accessToken) {
                state.accessToken = action.payload.auth.accessToken;
            }
            if (action.payload.auth.logout) {
                state = action.payload.auth;

                return state;
            }
            return state;
        });
        builder.addCase(`${registerUser.pending}`, (state) => {
            // ... your existing reducer logic ...
            state.loading = true;
            state.error = null;
        });
        builder.addCase(`${registerUser.fulfilled}`, (state) => {
            // ... your existing reducer logic ...
            state.loading = false;
            state.success = true; // registration successful
        });
        builder.addCase(
            `${registerUser.rejected}`,
            (state, action: PayloadAction<string>) => {
                // ... your existing reducer logic ...
                state.loading = false;
                state.error = action.payload;
                // 2. VERY IMPORTANT! Throw an error!
            }
        );
        builder.addCase(`${userLogin.pending}`, (state) => {
            // ... your existing reducer logic ...
            state.loading = true;
            state.error = null;
        });
        builder.addCase(
            `${userLogin.fulfilled}`,
            (state, action: PayloadAction<any>) => {
                // ... your existing reducer logic ...
                state.loading = false;
                state.userInfo = action.payload.user;
                state.accessToken = action.payload.token;

                state.error = null;
            }
        );
        builder.addCase(
            `${fetchUser.fulfilled}`,
            (state, action: PayloadAction<TUser>) => {
                // ... your existing reducer logic ...
                state.loading = false;
                state.userInfo = action.payload;
                state.error = null;
            }
        );

        builder.addCase(
            `${userLogin.rejected}`,
            (state, action: PayloadAction<string>) => {
                // ... your existing reducer logic ...
                state.loading = false;
                state.error = action.payload;
                // 2. VERY IMPORTANT! Throw an error!
            }
        );
        builder.addCase(`${userLogout.fulfilled}`, (state) => {
            state.loading = false;
            state.userInfo = null;
            state.accessToken = null;
            state.error = null;
            state.userAddress = null;
        });

        builder.addCase(`${userLogout.rejected}`, (state) => {
            state.loading = false;
            state.userInfo = null;
            state.accessToken = null;
            state.error = null;
            state.userAddress = null;
        });
    },
});

export const { setCredentials, updateAccessToken, reset } = authSlice.actions;
export default authSlice.reducer;
export const getAccessToken = (state: RootState) => state.auth.accessToken;
