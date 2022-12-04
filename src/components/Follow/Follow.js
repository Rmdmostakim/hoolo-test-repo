
import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from "react-bootstrap";
import "./follow.css";
import {useSelector } from "react-redux";
import VideoCaseCard from '../Video/VideoCaseCard';
import axios from 'axios';

function Follow(props) {
    const {follow} = useSelector((state)=>state.follow);
    const [followers, setFollow]=useState([]);
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
          );
      
    
       },[id])

    if(follow){
        return (
            <>
                <Container fluid className="mt-3 mb-5">
                <div className="video-block section-padding ">
                    <Row>
                        {props.video.map((videos)=>{
                            if(follow.includes(videos.store_id)){
                                return (
                                    <Col xl={4} sm={6} className="mt-4" key={videos.id}>
                                    <VideoCaseCard
                                        videos={videos}
                                        id={videos.id}
                                        video_products={videos.products}
                                        history={props.history}
                                        follow={followers}
                                        likes={likes}
                                        products={props.products}
                                        comments={props.comments}
                                    />
                                </Col>
                                );
                            }
                            return null;
                        })}
                    </Row>
                </div>
                </Container>
            </>
        );
    }
    return (
        <div style={{minHeight:'300px', marginTop:'100px',textAlign:'center' }}>
            <h4 style={{ color:'red' }}>No data found</h4>
        </div>
    );
}

export default Follow
