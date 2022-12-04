import React from 'react'
import VideoTitle from './VideoTitle'
import './VideoPage.css'
import AuthorBox from './AuthorBox';
// import { Player,ControlBar,PosterImage,LoadingSpinner,ClosedCaptionButton } from 'video-react';
// import ReactPlayer from 'react-player'
function VideoFrame(props) {
    const {id,title,description,video,category_id,store_id,store_name,product_name,product_detail,thumbnail,hover_thumbnail,shopIcon,views,store_logo,uuid}=props.video;
    return (

        <> 
     
            <div className="single-video"   >
 
 {/* <ReactPlayer url={`https://shop.hoolo.live/public/videos/${video}`}
    controls={true}  width="100%"  style={{backgroundColor:'black'}}
    
    /> */}
  
   
        </div>  
        <VideoTitle
      title={title}
   views={views}

/>
<AuthorBox
					subscriberCount="1.4M"
					imgSrc={`https://shop.hulusthul.live/images/store/${store_logo}`}
					channelName={store_name}
                    channelHref={`https://shop.hulusthul.live/store/${uuid}/${store_name}`}
					verified
					publishedOn="16793"
				/>
        </>
    )
}

export default VideoFrame
