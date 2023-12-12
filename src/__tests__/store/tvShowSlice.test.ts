import { TVShowState, tvShowReducer } from "../../store/tvShowSlice";

describe("TVShow Reducer", () => {
    const initState: TVShowState = {
        name: "",
        summary: "",
        imgUrl: "",
        episodes: [],
        isLoading: false,
        errorMsg: "",
    }

    it("should return an initial state", () => {
        const result = tvShowReducer(undefined, {type: ""});
        expect(result).toEqual(initState)
    });
})