import axios from 'axios';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import { Container,Row } from 'react-bootstrap';
import {Placeholder } from 'rsuite';
import VideoCase from '../Video/VideoCase';
import { useSelector } from 'react-redux';

export default function Likes() {
  const {videos,follows,likes,comments,products,users} = useSelector((state)=>state.app);
  const [liked,setLikes] = useState(null);
  const baseUrl = 'https://shop.hoolo.live/api/';
  const userId = localStorage.getItem('id');
  useEffect(()=>{
    async function fetch(){
      await axios
      .get(`${baseUrl}users/likes/${userId}`)
      .then((res) => {
        setLikes(res.data.Likes);
      });
    }fetch();
    window.scrollTo({
        top: 0,
    });
  },[userId]);

  if(!liked){
    return <Placeholder.Graph active />;
  }else{
    const data = videos.filter((element)=> liked.find(({ video_id }) => element.id === video_id));
      return (
        <Container>
          <VideoCase
            video={data} 
            comments={comments} 
            likes={likes} 
            follows={follows} 
            products={products} 
            users={users}
          />
        </Container>
      );
  }
}
