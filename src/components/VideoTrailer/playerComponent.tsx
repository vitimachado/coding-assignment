import { Player } from '../../types/common'
import YoutubePlayerComponent from './Players/YoutubePlayer'

export const PlayerComponent = ({ videoKey, player = 'youtube' }: Player) => {
    if(!videoKey) {
        return <div style={{padding: "30px"}}><h6>No trailer available. Try another movie.</h6></div>
    }

    switch (player) {
        default:
            return <YoutubePlayerComponent videoKey={videoKey} />
    }
}
