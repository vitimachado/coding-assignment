import { useSelector } from 'react-redux'
import { RootState } from '../../data/store'
import { ListWatchLater } from '../../components/ListWatchLater/ListWatchLater'

import '../../styles/starred.scss'

const WatchLater = () => {
    const watchLater = useSelector((state: RootState) => state.watchLater)

    return (
        <div className="starred" data-testid="watch-later-div">
            <ListWatchLater movies={watchLater?.watchLaterMovies} />
        </div>
    )
}

export default WatchLater
