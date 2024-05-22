import { useDispatch } from "react-redux";
import { fetchMovie } from "../../data/movieSlice";
import { AppDispatch } from "../../data/store";
import { ListMovies, Movie } from "../../types/movie";
import { MovieComponent } from "../Movie";

export const ListMoviesComponent = ({ movies }: ListMovies) => {
    const dispatch = useDispatch<AppDispatch>();

    const viewTrailer = (movie: Movie) => {
        dispatch(fetchMovie(movie.id));
    }

    const onCloseCard = () => {

    }

    return (
        <>
            {movies?.map((movie) => {
                return (
                    <MovieComponent
                        movie={movie} 
                        key={movie.id}
                        viewTrailer={viewTrailer}
                        closeCard={onCloseCard}
                    />
                )
            })}
        </>
    )
}
