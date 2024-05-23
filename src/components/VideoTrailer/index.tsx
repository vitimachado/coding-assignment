import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../data/store'
import { Player } from '../../types/common'
import { PlayerComponent } from './playerComponent';
import { Modal } from '../Modal';
import { clearVideoKey } from '../../data/movieSlice';

export const VideoTrailer = ({ player = 'youtube' }: Player) => {
    const dispatch = useDispatch();
    const videoKey = useSelector<RootState>((state) => state?.movie?.videoKey) as string | null;

    const handleOnClose = () => {
        dispatch(clearVideoKey())
    }

    return (
        <Modal open={!!videoKey} onClosed={handleOnClose}>
            <PlayerComponent videoKey={videoKey} player={player} />
        </Modal>
    )
}
