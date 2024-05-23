import { ListMoviesComponent } from '../../components/ListMovies'
import { ListMovies } from '../../types/movie'

import '../../styles/starred.scss'

type IListMoviesContainer = ListMovies & {
    title: string
    testid: string
    FooterComponent: () => JSX.Element
    NoDataComponent: () => JSX.Element
}

export const ListMoviesContainer = ({ movies, title, testid, FooterComponent, NoDataComponent }: IListMoviesContainer) => {
    return movies && movies.length > 0 ? (
        <div data-testid={testid} className="starred-movies">
            <h6 className="header">{ title }</h6>
            <div className="row">
                <ListMoviesComponent movies={movies} />
            </div>
            { FooterComponent && <FooterComponent /> }
        </div>
    ) : NoDataComponent && <NoDataComponent />;
}

