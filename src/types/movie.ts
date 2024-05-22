import { FetchStatus } from "./common";

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    videos: {
        results: {
            key: string
            type: string
        }[]
    }
}

export interface MovieSlice {
    movie: Movie | null;
    videoKey: string | null;
    fetchStatus: FetchStatus
}

export interface MoviesSlice {
    movies: MoviesResponse | null;
    fetchStatus: string
}
  
interface MoviesResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}

export interface ListMovies {
    movies?: Movie[]
}