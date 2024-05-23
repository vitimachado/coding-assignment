import { StarredMovieButton } from './StarredMovieButton'
import { WatchLaterMovieButton } from './WatchLaterMovieButton'
import { IMovieComponent } from '../../types/movie'
// @ts-ignore: Unreachable code error
import placeholder from '../../assets/not-found-500X750.jpeg'

import '../../styles/starred.scss'

export const MovieComponent = ({ movie, onCLickViewTrailer }: IMovieComponent) => {
    return (
        <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card">
                <div className="card-body text-center">
                    <div className="overlay" />
                    <div className="info_panel">
                        <div className="overview">{movie?.overview}</div>
                        <div className="year">{movie?.release_date?.substring(0, 4)}</div>
                        <StarredMovieButton movie={movie} />
                        <WatchLaterMovieButton movie={movie} />
                        <button type="button" className="btn btn-dark" onClick={() => onCLickViewTrailer(movie)}>View Trailer</button>                                                
                    </div>
                    <img className="center-block" src={(movie.poster_path) ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : placeholder} alt="Movie poster" />
                </div>
                <h6 className="title mobile-card">{movie.title}</h6>
                <h6 className="title">{movie.title}</h6>
            </div>
        </div>        
    )
}
