import { useSelector } from 'react-redux'
import { RootState } from '../../data/store'
import { ListStarred } from '../../components/ListStarred/ListStarred'

import '../../styles/starred.scss'

const Starred = () => {
    const starred = useSelector((state: RootState) => state.starred)

    return (
        <div className="starred" data-testid="starred">
            <ListStarred movies={starred?.starredMovies} />
        </div>
    )
}

export default Starred
