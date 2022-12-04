import React,{useState,useEffect,useRef} from "react";
import { ImLoop } from "react-icons/im";
import { Player, BigPlayButton, ControlBar, play} from "video-react";

const VideoPlayer = (props) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const startVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
    
  };

  const pauseVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const handleScroll = () => {
    if (window.scrollY) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const [hoverPlay,setHoverPlay] = useState(false);
  const onHoverPlay = () => {
    setHoverPlay(true);
    videoRef.current.play();
  }
  const onHoverPause = () =>{
    videoRef.current.pause();
  }
  const onClickPlay = () =>{
    setHoverPlay(false);
  }
  const onScrollAutoPlay = () =>{
    if ( document.querySelectorAll('video[autoplay]').length > 0) {
      const windowHeight = window.innerHeight;
      const videoEl = document.querySelectorAll('video[autoplay]');
      for (var i = 0; i < videoEl.length; i++) {
        const thisVideoEl = videoEl[i];
        const videoHeight = thisVideoEl.clientHeight;
        const videoClientRect = thisVideoEl.getBoundingClientRect().top;
        if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
          const playPromise = thisVideoEl.play();
          if (playPromise !== null){
              playPromise.catch(() => { thisVideoEl.play(); })
          }
        } else {
          thisVideoEl.pause();
        }
  
      }
    }
  }

  useEffect((e) => {
    window.addEventListener("scroll", onScrollAutoPlay);
    return () => {
      window.removeEventListener('scroll', onScrollAutoPlay);
    };
  },[]);
  
  return (
    <div>
      <Player
        ref={videoRef}
        className="video-player-frame"
        poster={props.thumbnail}
        autoPlay={false}
        muted={false}
      >
        <source className="source" src={props.video} />
        <BigPlayButton position="center" />
        <ControlBar autoHide={true} className="video-player-controlbar" />
      </Player>
    </div>
  );
};

export default VideoPlayer;
