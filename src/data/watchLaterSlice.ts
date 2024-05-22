import { createSlice } from "@reduxjs/toolkit"

const watchLaterSlice = createSlice({
    name: 'watch-later',
    initialState: {
        watchLaterMovies: []
    },
    reducers: {
        addToWatchLater: (state, action) => {
            state.watchLaterMovies = [action.payload, ...state.watchLaterMovies]
        },
        removeFromWatchLater: (state, action) => {
            const indexOfId = state.watchLaterMovies.findIndex(key => key.id === action.payload.id)
            state.watchLaterMovies.splice(indexOfId, 1)
        },
        removeAllWatchLater: (state) => {
            state.watchLaterMovies = []
        },
    },
})

export const { addToWatchLater, removeFromWatchLater, removeAllWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice
