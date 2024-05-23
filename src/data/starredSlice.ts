import { createSlice } from "@reduxjs/toolkit"
import { StarredSlice } from "../types/movie"

const initialState: StarredSlice = { 
    starredMovies: null
}

const starredSlice = createSlice({
    name: 'starred',
    initialState,
    reducers: {
        starMovie: (state, action) => {
            state.starredMovies = [action.payload, ...(state?.starredMovies || [])]
        },
        unstarMovie: (state, action) => {
            const indexOfId = state?.starredMovies?.findIndex(key => key.id === action.payload.id);
            if(indexOfId !== undefined && state?.starredMovies) {
                state?.starredMovies.splice(indexOfId, 1);
            }
        },
        clearAllStarred: (state) => {
            state.starredMovies = []
        },
    },
})

export const { starMovie, unstarMovie, clearAllStarred } = starredSlice.actions;

export default starredSlice
