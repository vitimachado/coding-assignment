import { useDispatch } from 'react-redux'
import { clearAllStarred } from '../../data/starredSlice'

import '../../styles/starred.scss'

export const FooterStarred = () => {
    const dispatch = useDispatch();

    return (
        <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>Remove all starred</button>
        </footer>
    );
}
