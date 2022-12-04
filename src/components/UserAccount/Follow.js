import React, { useEffect } from 'react'
import {useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import {Placeholder } from 'rsuite';
import VideoCase from '../Video/VideoCase';

function Following() {
    const {follow} = useSelector((state)=>state.follow);
    const {videos,follows,likes,comments,products,users} = useSelector((state)=>state.app);

    useEffect(()=>{
      window.scrollTo({
          top: 0,
      });
    },[]);

    if(!follow){
      return <Placeholder.Graph active />;
    }else{
      let data = videos.filter((video)=>follow.includes(video.store_id));
      return (
        <div>
          <VideoCase 
            video={data} 
            comments={comments} 
            likes={likes} 
            follows={follows} 
            products={products} 
            users={users}
          />   
        </div>   
      );
    }

}

export default Following;
