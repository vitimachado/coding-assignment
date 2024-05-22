import { useSelector } from 'react-redux'
import { RootState } from '../../data/store'
import { Player } from '../../types/common'
import { PlayerComponent } from './playerComponent';

export const VideoTrailer = ({ player = 'youtube' }: Player) => {
    const videoKey = useSelector<RootState>((state) => state?.movie?.videoKey) as string | null;
    return <PlayerComponent videoKey={videoKey} player={player} />
}
