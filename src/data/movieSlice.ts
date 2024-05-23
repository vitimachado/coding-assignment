import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUrlMovie } from "../utils/apis"
import { MovieSlice, Movie } from "../types/movie";

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (id: string) => {
    const apiUrl = getUrlMovie(id);
    const response = await fetch(apiUrl);
    return response.json()
});

const initialState: MovieSlice = {
    movie: null,
    videoKey: null,
    fetchStatus: ''
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setVideoKey: (state, action) => {
            state.videoKey = action.payload
        },
        clearVideoKey: state => {
            state.videoKey = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action: PayloadAction<Movie>) => {
            const videoData = action.payload;
            state.movie = action.payload;

            if (videoData?.videos && videoData?.videos?.results?.length) {
                const trailer = videoData?.videos?.results?.find(vid => vid.type === 'Trailer')
                state.videoKey = (trailer ? trailer.key : videoData.videos.results[0].key)
            }
            state.fetchStatus = 'success'
        }).addCase(fetchMovie.pending, (state) => {
            state.fetchStatus = 'loading'
        }).addCase(fetchMovie.rejected, (state) => {
            state.fetchStatus = 'error'
        })
    }
})

export const { setVideoKey, clearVideoKey } = movieSlice.actions;

export default movieSlice
