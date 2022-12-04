import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 
 

const Video = ({
  id,
  title,
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  thumbnail,
  store_logo,
  store,
  video_products,
  uuid,
  store_id,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
   

  useEffect((e) => {
    window.addEventListener('scroll', handleScroll)
    
  });

  const startVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  }

  const pauseVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  }

  const handleScroll = () => {
      
  if (window.scrollY) {
    videoRef.current.pause();
    setPlaying(false);
    }  
  
  }

  const handleVideoPress = () => {
    if (playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };


 
  return (  
    <div>
    
      <div className="video">
        <video
          className="video__player"
          onClick={handleVideoPress}
          ref={videoRef}
          src={`https://shop.hoolo.live/public/videos/nDmIHfHAWQsSB31orF3MASNd9iwJJg.mp4`}
          poster={`https://shop.hoolo.live/public/products/j6PylNG5tIMTljk4cce5duk0yWHf7t.jpg`}
        ></video>

        <Footer
          store_logo={store_logo}
          channel={channel}
          description={description}
          title={title}
          uuid={uuid}
          store_id={store_id}
          id={id}
          video_products={video_products}
        />
        <Sidebar video_products={video_products}    id={id} />
      </div>
 
    </div>
  );
};

export default Video;

 /* useEffect(() => {
    let options={
      root:null, rootMargin:'0px',threshold:1.0
    }
    let callback=(entries,observer)=>{
      entries.forEach(entry=>{
              if(entry.target.id== 'videoId'){
              entry.target.play();
              console.log(entry.target.play())
              }else{
                entry.target.pause();
                console.log(entry.target.pause())
              }

      })
    }
   let observer= new IntersectionObserver(callback,options);
   observer.observe(document.getElementById('videoId'))
   
   
   } );


     const handleLeave = () => {
    videoRef.current.pause();
    console.log("leave");
  }

  const handleEnter = () => {
    videoRef.current.play();
    console.log("enter");
  }
   */