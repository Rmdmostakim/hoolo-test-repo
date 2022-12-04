import React, {useState, useEffect } from "react";
import {Row,Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import VideoCaseCard from "./VideoCaseCard";
import axios from "axios";
import "./Video.css";
import Upcoming from "../Upcoming/Upcoming";
import DiscoverSlider from '../DiscoverSlider/DiscoverSlider'
import { styles } from './../SupportEngine/styles';


function VideoCase(props) {

   const [follow, setFollow]=useState([]);
   const [likes, setLikes]=useState([]);
   const id = localStorage.getItem("id");

   useEffect(()=>{
      if(id){
        const baseUrl = 'https://shop.hoolo.live/api/';
        const follow = `${baseUrl}following/${id}`;
        const likes = `${baseUrl}getlikes/${id}`;

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
    <div>
    <Container fluid className="mv2">
        <div className="video-block section-padding">
          <Row>
            {props.video.map((video)=>{
              if(Number(video.featured) === 1){
                return(
                  <Col className="col-mv" xl={4} sm={6} key={video.id}>
                    <VideoCaseCard
                      videos={video}
                      id={video.id}
                      video_products={video.products}
                      history={props.history}
                      follow={follow}
                      likes={likes}
                      products={props.products}
                      comments={props.comments}
                      key={video.id}
                    />
                  </Col>
                );
              }
            })}
            {props.video.map((video)=>{
              if(Number(video.featured) !== 1){
                return(
                  <Col className="col-mv" xl={4} sm={6} key={video.id}>
                    <VideoCaseCard
                      videos={video}
                      id={video.id}
                      video_products={video.products}
                      history={props.history}
                      follow={follow}
                      likes={likes}
                      products={props.products}
                      comments={props.comments}
                      key={video.id}
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </div>
  
    </Container>
  </div>
  )
}

export default VideoCase;