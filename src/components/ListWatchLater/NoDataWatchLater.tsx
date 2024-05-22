import { Link } from 'react-router-dom'

import '../../styles/starred.scss'

export const NoDataWatchLater = () => {
    return (
        <div className="text-center empty-cart">
            <i className="bi bi-heart" />
            <p>You have no movies saved to watch later.</p>
            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    );
}
