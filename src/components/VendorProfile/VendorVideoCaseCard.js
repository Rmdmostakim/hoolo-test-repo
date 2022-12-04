// import env from "react-dotenv";
import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoProducts from "../Video/SlideProudcts/VideoProducts";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import PostComment from "../Video/Comments/PostComment";
import Login from "../Auth/Login";
import { useNavigate} from "react-router-dom";
import swal from "sweetalert";
import VideoPlayer from "../Video/VideoPlayer";
import '../Video/Video.css'
import SocialShare from "../Share/Index";
import { useSelector,useDispatch } from "react-redux"; 
import { setFollow } from "../../features/FollowSlice";
import Getcommments from "../Video/Comments/Comments";
 


const VendoreVideoCaseCard =(props)=>{
  const id = localStorage.getItem("id");
  const history=  useNavigate()
   const [videoProducts, setVideoProducts] = useState([]);
   const [share, setShare]= useState(false)
   const [count, setCount] = useState(0);
   const [totalLike, setTotalLike]= useState(0);
   //comment modal
   const [commentModal, setCommentModal]= useState(false);
   const showCommentModal = () =>{
    if(id){
      setCommentModal(true);
    }else{
      swal('You have to login','','error');
    }
   }
   const hideCommentModal = () => setCommentModal(false);

   //follow handler
   const dispatch = useDispatch();
   const {follow} = useSelector((state)=>state.follow);
   const checkFollow = (storeId) =>{
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
        const url = `${process.env.REACT_APP_BASE_URL}/follow`;
        axios.post(url,{user_id:id,store_id:storeId}).then((res)=>{
          if(res.status === 202){
            dispatch(setFollow(storeId));
          }
        }).catch((err)=>{
          console.log(err);
        });
        
      }else{
        swal("You Have to Login!", "login now", "error");
      }
    }
   useEffect(()=>{
    fatchData(props.video_products);

    const like =  `${process.env.REACT_APP_BASE_URL}/videolikes/${props.videos.id}`;
    const getLikes = axios.get(like);

    axios
      .all([getLikes])
      .then(
        axios.spread((...allData) => {

        
          setTotalLike(allData[0].data.Count)

        })
      )
   },[props.videos.id]);

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
        .post( `${process.env.REACT_APP_BASE_URL}/savelikes`, likeObje)
        .then((res) => {
         
          setTotalLike(res.data.Count)
      
        })
        setCount(3)
        setTotalLike( totalLike + 1)
    }else{
      swal("You have to login!", "", "error");
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
        .post( `${process.env.REACT_APP_BASE_URL}/unlike`, unlikeObje)
        .then((res) => {
          console.log(res)
        })
 
        setCount(2)
        setTotalLike( totalLike - 1)
  
    };

   const CheckLogin = () => {
    const userId = localStorage.getItem("id");

    if (!userId) {
      swal("You have to login!", "", "error");
      return history.push("/auth/login");
    }
    };



 const hasLiked = (likes, id) => likes.find((like) => like.id === props.videos.id);
    return(
      <>
      <div className="mainVideo-card">
        <div className="mainVideo-card-header">
          <div className="mainVideo-card-header-profile">
            <div className="mainVideo-card-header-profile-info">
              <img
                src={`https://shop.hoolo.live/images/store/${props.videos.store_logo}`}
                alt={props.videos.store_uuid}
              />
              <div className="title"> 
                  <strong>{props.videos.store_name}</strong>
                <div className="ml-1" style={{ cursor:'pointer' }} onClick={()=>followHandler(props.videos.store_id)}>
                  { checkFollow(props.videos.store_id)? <FontAwesomeIcon icon={faBell} />: <span style={{ color:'blue',fontWeight:'bold' }}>Follow</span>}
                </div>
             </div> 
            </div>
          </div>
          <div className="mainVideo-card-header-title">
            <p>{props.videos.title}</p>
          </div>
         </div>
        <div className="mainVideo-card-body">
          <VideoPlayer video={props.videos.video} thumbnail={props.videos.thumbnail} />
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
              { hasLiked(props.likes, id) &&
                (count==0 &&
                <span type="submit">
                    <img src="/img/svg/FillHeart.svg" style={{ width: "20px", marginLeft: "5px" }}
                onClick={Unlike}
                alt="like" />
                </span>
                )
              }
            {!hasLiked(props.likes, id) &&
              (
              count == 0 &&
              <span type="submit">
                <img src="/img/svg/Heart.svg" style={{ width: "20px", marginLeft: "5px" }}
                onClick={Like}
                alt="like" />
              </span>
              )
            }
                {count === 2 && (
                  <span type="submit">
                    <img
                      src="/img/svg/Heart.svg"
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
                      src="/img/svg/FillHeart.svg"
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
                {" "}
                <img src="/img/svg/Comment.svg" style={{ width: "20px" }}  alt="comment"/>
              </p>
            </div>

            <div></div>

            <div className="d-flex">
              <p className="mr-2" onClick={()=>setShare(true)}>
                50 <img src="/img/svg/Share.svg" style={{ width: "20px" }} alt="comment" />{" "}
              </p>
            </div>
          </div>
        </div>

      </div>

      <Modal show={commentModal} onHide={hideCommentModal}>
        {id ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
              <small>Comments</small>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.comments.map((comment)=>{
                if(props.videos.id === comment.video_id){
                  const replies = props.comments.filter((data)=>{
                    return comment.id === data.parent_id;
                  });
                  return <Getcommments comment={comment} replies={replies}  replyable={true}/>
                }
                return null;
              })}
            <PostComment id={props.videos.id} parent={'0'}/>
            </Modal.Body>  
          </>
        ) : (
          <Login />
        )}
      </Modal>

      <Modal
        size="lg"
        show={share}
        onHide={() => setShare(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {id ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg ">
              Share and get amazing products
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
            <SocialShare
             socialTypes={['facebook', 'twitter', 'whatsapp']}
             url={`https://shop.hoolo.live/public/videos/${props.videos.video}`}
             onSocialButtonClicked={function (data) { }}
             />
             
            </Modal.Body>{" "}
             
          </>
        ) : (
          <Login />
        )}
      </Modal>
    </>
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
  <>
  <p className="mr-2">{counter()}</p>
  </>
)
}


/* like count */



const LikesCount =(props) =>{
  const [likes, setLikes]= useState([]);

  useEffect(()=>{
    axios
      .get(`https://shop.hoolo.live/api/videolikes/${props.id}`)
      .then((res) => {
         setLikes(res.data.Count)
         console.log(res.data.Count)
      });
  })
  return(
    <>
    
       <p className="mr-2">{likes}</p>
       
    </>
  )
}


export default VendoreVideoCaseCard;

 