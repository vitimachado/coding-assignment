import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ENDPOINT_DISCOVER } from '../../constants';
import { fetchMovies } from '../../data/moviesSlice';
import { AppDispatch, RootState } from '../../data/store';
import { ListMoviesComponent } from '../../components/ListMovies';

import '../../styles/movies.scss'

const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state?.movies).movies;

    useEffect(() => {
        dispatch(fetchMovies(ENDPOINT_DISCOVER))
    }, [])

    return (
        <div data-testid="movies" className="movies-container">
            <ListMoviesComponent movies={movies?.results} />
        </div>
    )
}

export default Movies
