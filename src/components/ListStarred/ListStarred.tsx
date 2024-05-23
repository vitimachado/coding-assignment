import { ListMovies } from '../../types/movie'
import { FooterStarred } from './FooterStarred'
import { ListMoviesContainer } from '../ListMovies/ListMoviesContainer'
import { NoDataStarred } from './NoDataStarred'

import '../../styles/starred.scss'

export const ListStarred = ({ movies }: ListMovies) => {
    return (
        <ListMoviesContainer
            movies={movies}
            title="Starred movies"
            testid="starred-movies"
            FooterComponent={FooterStarred}
            NoDataComponent={NoDataStarred}
        />
    )
}
