import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
    Store,
    AnyAction,
} from "@reduxjs/toolkit";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "@/state/authSlice";


const rootReducer = combineReducers({
    auth: authReducer,

});

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,

        devTools: false,
    });
export const makeStore = (): Store<RootState> => {
    const isServer = typeof window === "undefined";

    if (isServer) {
        return makeConfiguredStore();
    } else {
        // we need it only on the client side

        const persistConfig = {
            key: "aristore_key",
            whitelist: ["auth", "cart", "wishlist"],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store: any = configureStore({
            reducer: persistedReducer,

            devTools: false,
        });

        store.__persistor = persistStore(store);

        return store;
    }
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export const persistor = persistStore(store);
// Define a custom hook to access the store and dispatch

export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;
