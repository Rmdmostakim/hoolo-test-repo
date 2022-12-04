
import React, {useState, useEffect } from "react";
import {Row,Col} from "react-bootstrap";
import ShareVideoCaseCard from "./ShareVideoCaseCard";
import axios from "axios";
import "./ShareVideo.css";



function ShareVideoCase(props) {

   const [follow, setFollow]=useState([]);
   const [likes, setLikes]=useState([]);
   const id = localStorage.getItem("id");

   useEffect(()=>{
   
    const follow = `${process.env.REACT_APP_BASE_URL}/following/${id}`;
    const likes = `${process.env.REACT_APP_BASE_URL}/getlikes/${id}`;

    const getFollow = axios.get(follow);
    const getLikes = axios.get(likes);
   
      axios
      .all([getFollow, getLikes])
      .then(
        axios.spread((...allData) => {
         setFollow(allData[0].data);
         setLikes(allData[1].data)
       
        })
      )
      // .catch((res) => {
      //   console.log(`this is error from laravel ${res}`);
      // });
  

   },[id])
  return (
    <>
      <div className="video-block pb-5">
        <Row>
        {props.video.map(
            (videos) => 
              (  props.videoId==videos.id && 
                <Col xl={4} sm={6}  key={videos.id}>
                  <ShareVideoCaseCard
                    videos={videos}
                    id={videos.id}
                    video_products={videos.products}
                    history={props.history}
                    follow={follow}
                    likes={likes}
                    products={props.products}
                    comments={props.comments}
                  />
                </Col>
              ) 
           
          )}
        </Row>
      </div>
 
    </>
  )
}

export default ShareVideoCase;

