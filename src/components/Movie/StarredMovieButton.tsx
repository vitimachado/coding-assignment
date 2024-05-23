import { useDispatch, useSelector } from 'react-redux'
import { starMovie, unstarMovie } from '../../data/starredSlice'
import { RootState } from '../../data/store'
import { MovieButton } from '../../types/movie'

export const StarredMovieButton = ({ movie }: MovieButton) => {
    const starred = useSelector((state: RootState) => state.starred);
    const dispatch = useDispatch();

    const hasStar = !!starred?.starredMovies && Array.isArray(starred?.starredMovies) && !!starred?.starredMovies?.find(o => o.id === movie.id)

    if(hasStar) {
        return (
            <span className="btn-star" data-testid="unstar-link" onClick={() => dispatch(unstarMovie(movie))}>
                <i className="bi bi-star-fill" data-testid="star-fill" />
            </span>
        );
    }

    const handleSetStar = () => {
        const data = {
            id: movie.id, 
            overview: movie.overview, 
            release_date: movie.release_date?.substring(0, 4),
            poster_path: movie.poster_path,
            title: movie.title
        };
        dispatch(starMovie(data));
    }

    return (
        <span className="btn-star" data-testid="starred-link" onClick={() => handleSetStar()}>
            <i className="bi bi-star" />
        </span>
    );
}
