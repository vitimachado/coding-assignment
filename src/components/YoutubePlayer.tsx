import ReactPlayer from 'react-player'
import { Player } from '../types/common';

const YoutubePlayerComponent = ({ videoKey }: Player) => (<ReactPlayer 
  className="video-player" 
  url={`https://www.youtube.com/watch?v=${videoKey}`} 
  controls={true}
  playing={true}
  data-testid="youtube-player"
/>);

export default YoutubePlayerComponent;