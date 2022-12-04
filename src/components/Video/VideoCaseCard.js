import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoProducts from "./SlideProudcts/VideoProducts";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { faBell,faEye} from "@fortawesome/free-solid-svg-icons";
import PostComment from "./Comments/PostComment";
import { Link, useNavigate} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import './Video.css'
import SocialShare from "../Share/Index";
import { useDispatch, useSelector } from "react-redux";
import { setFollow } from "../../features/FollowSlice";
import Getcommments from './Comments/Comments';
import toast from 'react-hot-toast';
import storeLogo from '../../assets/images/store.png';
import red from '../../assets/icons/red.png';
import redd from '../../assets/icons/hrt.svg';
import comment from '../../assets/icons/com.svg';
import sharee from '../../assets/icons/send.svg';

const VideoCaseCard =(props)=>{
  const baseUrl = 'https://shop.hoolo.live/api/';
  const id = localStorage.getItem("id");
  const history=  useNavigate();
   const [videoProducts, setVideoProducts] = useState([]);
 
   const [commentModal, setCommentModal]= useState(false);
   const showCommentModal = () =>{
    if(id){
      setCommentModal(true);
    }else{
      toast.error('You have to login first!');
      history('/login',{replace:false});
    }
   }
   const hideCommentModal = () => setCommentModal(false);
   const [share, setShare]= useState(false)
   const [count, setCount] = useState(0);
   const [totalLike, setTotalLike]= useState(0);
   //view and share counter
   const [shareCount,setShareCount] = useState(0);
   const [viewCount,setViewCount] = useState(0);
   //follow handler
   const dispatch = useDispatch();
   const {follow} = useSelector((state)=>state.follow);
   const checkFollow = () =>{
        const storeId = props.videos.store_id;
        if (follow) {
          if(follow.includes(storeId)){
            return true;
          }
          return false;
      }
      return false;
    }
    const followHandler =(storeId)=>{
      if(id){
        const url = `${baseUrl}follow`;
        axios.post(url,{user_id:id,store_id:storeId}).then((res)=>{
          if(res.status === 202){
            dispatch(setFollow(storeId));
          }
        }).catch((err)=>{
          console.log(err);
        });
        
      }else{
        toast.error('You have to login first!');
        history('/login',{replace:false});
      }
    }

   useEffect(()=>{

    fatchData(props.video_products);

    const like =  `${baseUrl}videolikes/${props.videos.id}`;
    const getLikes = axios.get(like);

    axios
      .all([getLikes])
      .then(
        axios.spread((...allData) => {
          setTotalLike(allData[0].data.Count)
        })
      );
    axios.get(`${baseUrl}get-view-share/${props.videos.id}`).then((res)=>{
      if(res.status === 200){
        if(res.data.share!== null && res.data.share !== undefined){
          setShareCount(res.data.share);
        }
        if(res.data.view!== null && res.data.view !== undefined){
          setViewCount(res.data.view);
        }
      }
    }).catch((error)=>{
      console.log(error);
    });
   },[props.videos.id,props.video_products]);

  const fatchData=(video_products)=>{
    let getValue = video_products;
    const ArrayValue = getValue.split(",");
      setVideoProducts(ArrayValue)
  }
 
  const Like = (e) => {
    if(id){
      const likeObje = {
        user_id: id,
        video: props.videos.id,
        type: "like",
      };
      e.preventDefault();
      axios
        .post( `${baseUrl}savelikes`, likeObje)
        .then((res) => {    
          setTotalLike(res.data.Count)
        })
        setCount(3)
        setTotalLike( totalLike + 1)
    }else{
      toast.error('You have to login first!');
      history('/login',{replace:false});
    }
  
  };
  
    /* unlike function */
  
  const Unlike = (e) => {
      const unlikeObje = {
        user_id: localStorage.getItem("id"),
        video: props.videos.id,
      };
      e.preventDefault();
      axios
        .post( `${baseUrl}unlike`, unlikeObje)
        .then((res) => {
          // alert("unlike", res.data);
        })
        // .catch((err) => {
        //   console.log(err);
        // });
 
        setCount(2)
        setTotalLike( totalLike - 1)
  
    };

   const CheckLogin = () => {
    const userId = localStorage.getItem("id");

    if (!userId) {
      toast.error('You have to login first!');
      history('/login',{replace:false});
    }
    };




 const hasLiked = (likes, id) =>
    likes.find((like) => like.id === props.videos.id);
    // view counter
    const [viewed,setView] = useState(false);
    const viewhandler = () =>{
      if(viewed === false){
        setView(true);
        const {id} = props.videos;
        axios.get(`${baseUrl}increamentView/${id}`).then((res)=>{
          if(res.status === 200){
            setViewCount(viewCount+1);
          }
        });
      }   
    }
    const shareHandler = () =>{
      setShareCount(shareCount+1);
    }

    return(
    <div>
      <div className="mainVideo-card">

        <div className="mainVideo-card-header">
          <div className="mainVideo-card-header-profile">
            <div className="mainVideo-card-header-profile-info">
              <img
                src={props.videos.store_logo ? props.videos.store_logo : storeLogo}
                alt={props.videos.store_name}
              />
            </div>
            <div className="video-head-detail">
              <div className="videocard-title"> 
                <div style={{ display:'flex' }}>
                    <Link
                      to={`/vendors/videos/${props.videos.store_uuid}`}
                      style={{ color: "black" }}
                    >
                      <strong>{props.videos.store_name}</strong>
                    </Link>

                    <div onClick={()=>followHandler(props.videos.store_id)} className="ml-1" style={{ cursor:'pointer' }}>
                      {checkFollow() ? <FontAwesomeIcon icon={faBell} /> :<span style={{ color:'blue',fontWeight:'bold' }}>Follow</span>}
                    </div>
                </div>
                <div>
                  {viewCount} <FontAwesomeIcon icon={faEye} />
                </div>
              </div>
              <div className="mainVideo-card-header-title">
                <p>{props.videos.title}</p>
              </div>
            </div> 
          </div>
        </div>

        <div className="mainVideo-card-body" onClick={viewhandler}>
          <VideoPlayer video={props.videos.video} thumbnail={props.videos.thumbnail} style={{ background: "white !important" }} />
        </div>

        <div className="mainVideo-card-product">
          <VideoProducts
            products={props.products}
            videoProducts={videoProducts}
          />
        </div>

        <div className="mainVideo-card-footer">
          <div className="mainVideo-card-footer-content">
            <div className="d-flex" onClick={CheckLogin}>

              {
                totalLike
              }
              <p>
 
      { 
             hasLiked(props.likes, id)
                &&
               (
           count===0 &&
            <span type="submit">
                <img src={red} style={{ width: "20px", marginLeft: "5px" }}
             onClick={Unlike}
             alt="like" />
            </span>
             )
    }
            {
            !hasLiked(props.likes, id)
                &&
               (
                count === 0 &&
            <span type="submit">
                <img src={redd} style={{ width: "20px", marginLeft: "5px" }}
             onClick={Like}
             alt="like" />
            </span>
             )
    }
                {count === 2 && (
                  <span type="submit">
                    <img
                      src={redd}
                      style={{ width: "20px", marginLeft: "5px" }}
                      onClick={Like}
                      alt="like"
                    />
                  </span>
                ) 
                         }
                 {count === 3 && (
                  <span type="submit">
                    <img
                      src={red}
                      style={{ width: "20px", marginLeft: "5px" }}
                      onClick={Unlike}
                      alt="like"
                    />
                  </span>
                )}
              </p>
            </div>

            <div className="d-flex">
              <Comments id={props.videos.id} comments={props.comments} />
              <p
                className="mr-2"
                type="submit"
                onClick={showCommentModal}
              >
                <img src={comment} style={{ width: "20px" }}  alt="comment"/>
              </p>
            </div>
            <div className="d-flex">
              <p className="mr-2" style={{ cursor:'pointer' }} onClick={()=>setShare(true)}>
                {shareCount} &ensp;
                <img src={sharee} style={{ width: "20px" }} alt="comment" />{" "}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* comment modal */}
      <Modal show={commentModal} onHide={hideCommentModal}>
        <Modal.Header closeButton>
            <Modal.Title>
                <small>Comments</small>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="comment-card-body">
            {props.comments.map((comment)=>{
              if(props.videos.id === comment.video_id && comment.parent_id === 0){
                const replies = props.comments.filter((data)=>{
                  return comment.id === data.parent_id;
                });
                return <Getcommments key={comment.id} comment={comment} replies={replies}  replyable={true}/>
              }
              return null;
            })}
          </div>
          <div className="comment-post-card">
            <PostComment id={props.videos.id} parent={'0'}/>
          </div>
        </Modal.Body>
    </Modal>
    {/* share modal */}
    <Modal show={share} onHide={() => setShare(false)}>
        <Modal.Header closeButton>
          <Modal.Title><small>Share and get amazing offers</small></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SocialShare url={`https://www.hoolo.live/videos/${props.videos.slug}`} title={props.videos.title} updateCount={shareHandler} videoId={props.videos.id}/>
        </Modal.Body>
    </Modal>
    </div>
    )
}


const Comments =(props) =>{
  const counter = () =>{
    const filterCom =  props.comments.filter((comment)=>{
      return comment.video_id === props.id;
    });
    return filterCom.length;
  }
  return(
    <div>
    <p className="mr-2">{counter()}</p>
    </div>
  )
}

export default VideoCaseCard;