import { createSlice } from "@reduxjs/toolkit"
import { WatchedLaterSlice } from "../types/movie"

const initialState: WatchedLaterSlice = { 
    watchLaterMovies: null
}

const watchLaterSlice = createSlice({
    name: 'watch-later',
    initialState: initialState,
    reducers: {
        addToWatchLater: (state, action) => {
            state.watchLaterMovies = [action.payload, ...(state.watchLaterMovies || [])]
        },
        removeFromWatchLater: (state, action) => {
            const indexOfId = state?.watchLaterMovies?.findIndex(key => key.id === action.payload.id);
            if(indexOfId !== undefined && state?.watchLaterMovies) {
                state.watchLaterMovies.splice(indexOfId, 1);
            }
        },
        removeAllWatchLater: (state) => {
            state.watchLaterMovies = []
        },
    },
})

export const { addToWatchLater, removeFromWatchLater, removeAllWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice
