import { Link } from 'react-router-dom'

import '../../styles/starred.scss'

export const NoDataStarred = () => {
    return (
        <div className="text-center empty-cart">
            <i className="bi bi-star" />
            <p>There are no starred movies.</p>
            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    );
}
