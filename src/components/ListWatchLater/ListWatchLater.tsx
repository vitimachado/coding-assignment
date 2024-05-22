import { ListMovies } from '../../types/movie'
import { ListMoviesContainer } from '../ListMovies/ListMoviesContainer'
import { FooterWatchLater } from './FooterWatchLater'
import { NoDataWatchLater } from './NoDataWatchLater'

import '../../styles/starred.scss'

export const ListWatchLater = ({ movies }: ListMovies) => {
    return (
        <ListMoviesContainer
            movies={movies}
            title="Watch Later List"
            testid="watch-later-movies"
            FooterComponent={FooterWatchLater}
            NoDataComponent={NoDataWatchLater}
        />
    )
}
