import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { MoviesResponse, MoviesSlice } from "../types/movie";

export const fetchMovies = createAsyncThunk('fetch-movies', async (apiUrl: string) => {
    const response = await fetch(apiUrl)
    return response.json()
});

const initialState: MoviesSlice = { 
    movies: null,
    searchParam: null,
    fetchStatus: '',
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearchParam: (state, action) => {
            state.searchParam = action.payload
        },
        clearSearchParam: state => {
            state.searchParam = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MoviesResponse>) => {
            const movieResponse = action.payload;
            if(movieResponse.page > 1 && !!state?.movies && movieResponse.page > state.movies.page) {
                state.movies = {
                    ...movieResponse,
                    results : [ ...state.movies.results, ...movieResponse.results ]
                }
            }
            else {
                state.movies = movieResponse;
            }
            state.fetchStatus = 'success'
        }).addCase(fetchMovies.pending, (state) => {
            state.fetchStatus = 'loading'
        }).addCase(fetchMovies.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }
})

export const { setSearchParam, clearSearchParam } = moviesSlice.actions;

export default moviesSlice

