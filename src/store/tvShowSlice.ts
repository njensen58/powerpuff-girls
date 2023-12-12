import { createSliceWithThunks } from "../utils/createSliceWithThunks";
import { ITVShowResponse } from "../types";

export type TVShowState = {
    name: string;
    summary: string;
    imgUrl: string;
    isLoading: boolean;
    errorMsg: string;
}

const initialState: TVShowState = {
    name: "",
    summary: "",
    imgUrl: "",
    isLoading: false,
    errorMsg: "",
};

export const tvShowSlice = createSliceWithThunks({
    name: "tvShow",
    initialState,
    reducers: (create) => ({
        fetchTVShow: create.asyncThunk(
            async (tvShow: string) => {
                const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${tvShow}`);
                const data = await response.json();
                return data;
            },
            {
                pending: (state) => {
                  state.isLoading = true;
                },
                rejected: (state) => {
                  state.isLoading = false;
                  state.errorMsg = "Something went wrong";
                },
                fulfilled: (state, action) => {
                  state.isLoading = false;
                    const {name, summary, image} = action.payload as ITVShowResponse;
                    state.name = name;
                    state.summary = summary;
                    state.imgUrl = image.medium;
                },
            }
        )
    }),
});

export const tvShowReducer = tvShowSlice.reducer;
export const { fetchTVShow } = tvShowSlice.actions;