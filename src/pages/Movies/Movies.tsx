/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from '../../constants';
import { fetchMovies } from '../../data/moviesSlice';
import { AppDispatch, RootState } from '../../data/store';
import { ListMoviesComponent } from '../../components/ListMovies';

import '../../styles/movies.scss'
import { InfiniteScrollCOmponent } from '../../components/InfiniteScroll';

const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const moviesState = useSelector((state: RootState) => state?.movies);
    const movies = moviesState?.movies;
    const searchParam = moviesState?.searchParam;

    const hasSearchParam = (!!searchParam && searchParam !== '');

    useEffect(() => {
        if(!searchParam) {
            dispatch(fetchMovies(ENDPOINT_DISCOVER));
        }
    }, []);

    
    useEffect(() => {
        if (hasSearchParam) {
            dispatch(fetchMovies(`${ENDPOINT_SEARCH}&query=`+searchParam));
        }
        else if (searchParam === '') {
            dispatch(fetchMovies(ENDPOINT_DISCOVER));
        }
    }, [searchParam]);

    const onLoad = () => {
        const nextPage = Number(movies?.page) + 1;
        dispatch(fetchMovies(ENDPOINT_DISCOVER + '&page=' + nextPage));
    }

    const hasMoreElements = !!(movies?.total_pages && movies?.page) && !!(movies.total_pages - movies.page > 0) && !hasSearchParam;

    return (
        <div data-testid="movies" className="movies-container">
            <InfiniteScrollCOmponent hasMoreElements={hasMoreElements} onLoad={onLoad}>
                <ListMoviesComponent movies={movies?.results} />
            </InfiniteScrollCOmponent>
        </div>
    )
}

export default Movies
