import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { tvShowReducer } from "./tvShowSlice";

const rootReducer = combineReducers({
    tvShow: tvShowReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;