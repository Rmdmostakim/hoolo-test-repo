import React, { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChildNav from "../Homepage/ChildNav";
import "./Video.css";
import { Container } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import VideoCaseCard from "./VideoCaseCard";
import axios from "axios";
import PreLoader from "../Atomics/Preloader/PreLoader";
import VideoCategorySlide from "../Live/VideoCategory/VideoCategorySlider";
import Login from "../Auth/LoginOld"; 

function FollowVideo(props) {
  
  const [follow, setFollow]=useState([]);
  const [likes, setLikes]=useState([]);
  const id = localStorage.getItem("id");

  useEffect(()=>{
  
   if(id){
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
   }
 

  },[id])
 return (
   <>
   <Container fluid className="mt-3 mb-5">
     <div className="video-block section-padding ">
       <Row>
         {props.video.filter((video)=>{
             if(props.searchTerm===""){
               return video
             }else if(video.title.toLowerCase().includes(props.searchTerm.toLocaleLowerCase())){
               return video
             }
         }).map(
           (videos) =>
             (props.category == null && (
               <Col xl={4} sm={6} className="mt-4" key={videos.id}>
                 <VideoCaseCard
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
             )) ||
             (props.category ==
               JSON.parse(videos.category_title).en && (
               <Col xl={4} sm={6} className="mb-3" key={videos.id}>
                 <VideoCaseCard
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
             ))
         )}
       </Row>
     </div>

   </Container>
 </>
 )
}


export default FollowVideo;
