import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoProducts from "../../Video/SlideProudcts/VideoProducts";
import { faBell} from "@fortawesome/free-solid-svg-icons";
import PostComment from "../../Video/Comments/PostComment";
import GetComment from "../../Video/Comments/GetComment";
import { Link, useNavigate} from "react-router-dom";
import VideoPlayer from "../../Video/VideoPlayer";
import SocialShare from "../Index";
import { Modal } from "react-bootstrap";
import Login from "../../Auth/LoginOld";
import swal from "sweetalert";
import axios from "axios";
import "./ShareVideo.css";

const ShareVideoCaseCard =(props)=>{

  const id = localStorage.getItem("id");
  const name=localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const history=  useNavigate()
   const [videoProducts, setVideoProducts] = useState([]);
  //  const [videoLikes, setVideoLikes] = useState([]);
  //  const [like, setLike] = useState(false);
 
   const [comment, setComment]= useState(false);
   const [share, setShare]= useState(false)
   const [count, setCount] = useState(0);
   const [totalLike, setTotalLike]= useState(0)
  const [follow, setFollow]= useState(false)
  const [followcount, setFollowcount] = useState(0)
   const [comments,setComments]=useState({user_id:null, user:name, video_id:props.videos.id,  status: 1,email:email,comment:'',})
   const [videocomment, setVideocomment] =useState([]);

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
      // .catch((err) => {
      //   console.log(`this is error from laravel ${err}`);
      // });
   },[props.videos.id])

  const fatchData=(video_products)=>{
    let getValue = video_products;
    const ArrayValue = getValue.split(",");
    
      setVideoProducts(ArrayValue)
  
  }

    
 const  Follow = (e) => {
    const followObj = {
      user_id:id,
      store_id: props.videos.store_id,
      status: 1,
    };
    e.preventDefault();
    axios
      .post( `${process.env.REACT_APP_BASE_URL}/follow`, followObj)
      .then((res) => {
     
      })

      // .catch((err) => {
      //   console.log(err);
      // });
      // window.location.reload();
      setFollowcount(3)
 

 
  };

  const UnFollow = (e) => {
    const unfollowObj = {
      user_id: id,
      store_id:props.videos.store_id,
    };
    e.preventDefault();
    axios
      .post( `${process.env.REACT_APP_BASE_URL}/unfollow`, unfollowObj)
      .then((res) => {
        // window.location.reload()
      })

      // .catch((err) => {
      //   console.log(err);
      // });
      setFollowcount(2)
    
  };

 

   const Like = (e) => {
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
      
            // alert("like", res.data);
        })
        // .catch((err) => {
        //   console.log(err);
        // });
        setCount(3)
        setTotalLike( totalLike + 1)
        // alert(`You have like ${props.videos.id}`);
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
      swal("You Have to Login!", "login now", "success");
      return history.push("/auth/login");
    }
    };



 const hasFollow = (followStore, store_id) =>
    followStore.find((follow) => follow.store_id === store_id);

 const hasLiked = (likes, id) =>
    likes.find((like) => like.id === props.videos.id);


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
              {/* this is returning localhost  */}
                 
                  <strong>{props.videos.store_name}</strong>
                

                {/* <div onClick={CheckLogin} className="ml-1">
                  {hasFollow(props.follow, props.videos.store_id) ? (
                    <b
                      className="followIcon"
                      type="button"
                      onClick={UnFollow}
                    >
                      <FontAwesomeIcon icon={faBell} />
                    </b>
                  ) : (
                    <b className="follow" type="button" onClick={Follow}>
                      Follow
                    </b>
                  )}
 
                </div> */}



                  {/* Follow functionalites start here 22/6/2022 at 3:37 */}
                <div onClick={CheckLogin} className="ml-1">


               { 
             hasFollow(props.follow, props.videos.store_id)
                &&
               (
                followcount==0 &&
                <b
                className="followIcon"
                type="button"
                onClick={UnFollow}
              >
                <FontAwesomeIcon icon={faBell} />
              </b>
             )
    }
            {
            !hasFollow(props.follow, props.videos.store_id)
                &&
               (
                followcount == 0 &&
                <b className="follow" type="button" onClick={Follow}>
                Follow
              </b>
             )
    }
                {followcount === 2 && (
                   <b className="follow" type="button" onClick={Follow}>
                   Follow
                 </b>
                ) 
                         }
                 {followcount === 3 && (
                   <b
                   className="followIcon"
                   type="button"
                   onClick={UnFollow}
                 >
                   <FontAwesomeIcon icon={faBell} />
                 </b>
                )}

               {/* follow code end here */}





 
                </div>
             </div> 
            </div>

            {/* <div>
            <h6>Date</h6>
           </div>   */}
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
              {/* <LikesCount id={props.videos.id} /> */}
              {
                totalLike
              }
              <p>
                
                {/* {hasLiked(props.likes, id)? (
             <span  type='submit'  onClick={Unlike}>
                 <img src="/img/svg/FillHeart.svg" style={{width:'20px'}}  />
             </span>

              ) : (
                 
               <span  type="submit" onClick={Likes}>
                 <img src="/img/svg/Heart.svg" style={{width:'20px'}}     />
               </span> 
              )} */}

                {/* /* toggle 0/1 */ }
                    
                 


              {/* {
                 props.likes.map(e=>e.id==props.videos.id && <img src="/img/svg/FillHeart.svg" style={{width:'20px'}}  /> )
                        
              } */}

                {/* {count === 0? (
                  <span type="submit">
                    <img
                      src="/img/svg/Heart.svg"
                      style={{ width: "20px", marginLeft: "5px" }}
                      onClick={Like}
                      alt="like"
                    />
                  </span>
                ) : (
                  <span type="submit">
                    <img
                      src="/img/svg/FillHeart.svg"
                      style={{ width: "20px", marginLeft: "5px" }}
                      onClick={Unlike}
                      alt="like"
                    />
                  </span>
                )} */}
      { 
             hasLiked(props.likes, id)
                &&
               (
           count==0 &&
            <span type="submit">
                <img src="/img/svg/FillHeart.svg" style={{ width: "20px", marginLeft: "5px" }}
             onClick={Unlike}
             alt="like" />
            </span>
             )
    }
            {
            !hasLiked(props.likes, id)
                &&
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
              <Comments id={props.videos.id} />
              <p
                className="mr-2"
                type="submit"
                onClick={() =>  setComment(true) }
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

      <Modal
        size="lg"
        show={comment}
        onHide={() => setComment(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {id ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg ">
                Comments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className=" ">
              <GetComment comments={props.comments} id={props.videos.id} setComments={setComments} comment={comments} videocomment={videocomment} />

             
            </Modal.Body>{" "}
            <PostComment id={props.videos.id} setComments={setComments} comment={comments} videocomment={videocomment}   setVideocomment={setVideocomment}/>
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

  const [comment, setComment] = useState([]);


 
  useEffect(()=>{
    if(props.id){
      axios
      .get(`https://shop.hoolo.live/api/videocomment/${props.id}`)
      .then((res) => {
        setComment(res.data)
      })
    }
   
  })

return(
  <>
  
  <p className="mr-2">{comment.length}</p>
  </>
)
}




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


export default ShareVideoCaseCard;

 