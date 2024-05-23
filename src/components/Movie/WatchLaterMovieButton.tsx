import { useDispatch, useSelector } from 'react-redux'
import { addToWatchLater, removeFromWatchLater } from '../../data/watchLaterSlice'
import { RootState } from '../../data/store'
import { MovieButton } from '../../types/movie'

export const WatchLaterMovieButton = ({ movie }: MovieButton) => {
    const watchLater = useSelector((state: RootState) => state.watchLater);
    const dispatch = useDispatch();

    const hasStar = !!watchLater?.watchLaterMovies && Array.isArray(watchLater?.watchLaterMovies) && !!watchLater?.watchLaterMovies?.find(o => o.id === movie.id)

    if(hasStar) {
        return (
            <button
                type="button"
                data-testid="remove-watch-later"
                className="btn btn-light btn-watch-later blue"
                onClick={() => dispatch(removeFromWatchLater(movie))}>
                    <i className="bi bi-check"></i>
            </button>
        );
    }

    const handleSetWatchLater = () => {
        const data = {
            id: movie.id, 
            overview: movie.overview, 
            release_date: movie.release_date?.substring(0, 4),
            poster_path: movie.poster_path,
            title: movie.title
        };
        dispatch(addToWatchLater(data));
    }

    return (
        <button type="button" data-testid="watch-later" className="btn btn-light btn-watch-later" onClick={() => handleSetWatchLater()}>Watch Later</button>
    );
}
