import { useDispatch } from 'react-redux'
import { removeAllWatchLater } from '../../data/watchLaterSlice';

import '../../styles/starred.scss'

export const FooterWatchLater = () => {
    const dispatch = useDispatch();

    return (
        <footer className="text-center">
          <button className="btn btn-primary" onClick={() => dispatch(removeAllWatchLater())}>Empty list</button>
        </footer>
    );
}
