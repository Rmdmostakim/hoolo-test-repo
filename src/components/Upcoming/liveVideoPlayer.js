import React,{useState,useEffect,useRef} from "react";
import { Player,BigPlayButton, ControlBar, play, PosterImage } from "video-react";
import vid from '../../assets/icons/vid.mp4'
import white from '../../assets/icons/white.jpg'
import rr from '../../assets/icons/rr.png' ;
import { rangeRight } from "lodash";
import './Upcoming.css';
import { styles } from '../SupportEngine/styles';
const liveVideoPlayer = (props) => {
  const {cover,src} = props;
  return (
    <div className="lala">
      <Player
        className="video-player-frame"
        poster={cover}
        autoPlay={false}
        muted={false}
      >
        <source className="source" src={src} />
        <BigPlayButton position="center" />
        <ControlBar disableCompletely={true}/>
      </Player>
    </div>
  );
};

export default liveVideoPlayer;