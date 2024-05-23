import ReactPlayer from 'react-player'
import { Player } from '../../../types/common';

const YoutubePlayerComponent = ({ videoKey }: Player) => (
    <div data-testid="youtube-player">
        <ReactPlayer 
            className="video-player" 
            url={`https://www.youtube.com/watch?v=${videoKey}`} 
            controls={true}
            playing={true}
        />
    </div>

);

export default YoutubePlayerComponent;