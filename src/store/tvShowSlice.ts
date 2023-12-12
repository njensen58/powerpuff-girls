import { createSlice } from "@reduxjs/toolkit";

export type TVShowState = {
    title: string;
    description: string;
    imgUrl: string;
}

const initialState: TVShowState = {
    title: "TEST PowerPuff Girls",
    description: "",
    imgUrl: "",
}

export const tvShowSlice = createSlice({
    name: "tvShow",
    initialState,
    reducers: {},
});

export const tvShowReducer = tvShowSlice.reducer;