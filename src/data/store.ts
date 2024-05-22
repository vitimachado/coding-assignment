import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./moviesSlice"
import starredSlice from "./starredSlice"
import watchLaterSlice from "./watchLaterSlice"
import movieSlice from "./movieSlice"

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        movie: movieSlice.reducer,
        starred: starredSlice.reducer,
        watchLater: watchLaterSlice.reducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
