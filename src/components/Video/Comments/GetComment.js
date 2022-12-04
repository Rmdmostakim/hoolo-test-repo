import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Classes from './comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import swal from "sweetalert";
import userImg from './user.png';
function GetComment(props) {
  const {name,avatar,comment,commentId,user,videoId} = props;
  // comments like handler
  const [like, setLike] = useState(false);
  const likeHandler = () => {
      setLike(!like);
  };
  //comment edit handler
  const [edit,setEdit] = useState(false);
  const editBtn = () => setEdit(true);
  const userId= localStorage.getItem("id");
  const userName =  localStorage.getItem("name");
  const userEmail =  localStorage.getItem("email");
  const initial = { user_id: userId, user:userName, video_id:videoId,status: 1,email:userEmail,comment: comment};
  const [credentials, setCredentials]=useState(initial);
  const credentialHandler = (event) =>{
    const {name,value} = event.target;
    setCredentials({...credentials,[name]:value});
  }
  const submitHandler = () =>{
    console.log(credentials);
    swal("Update", "Comment has been updated Successfully", "success");
    setCredentials(initial);
    setEdit(false);
    // axios
    //   .post(`${process.env.REACT_APP_BASE_URL}/videocomment`, credentials)
    //   .then((res)=>{
    //       if(res.status === 200){
    //         setCredentials(initial);
    //         swal("Success", "Comment has been updated Successfully", "success");
    //         setEdit(false);
    //       }else{
    //         swal("Failed", "", "error");
    //       }
    //   })
    //   .catch((error)=>{
    //     swal("Failed", "", "error");
    //   });
  }
  const deleteBtn = () =>{
    axios.delete(`${process.env.REACT_APP_BASE_URL}/videocomment/${commentId}`)
    .then((res)=>{
        if(res.status === 200){
            swal("Delete", "Comment has been deleted Successfully", "success");
        }else{
            swal("Delete Failed", "", "error");
        }
    })
    .catch((err)=>{
        swal("Delete Failed", "", "error");
    });
    swal("Delete", "Comment has been deleted Successfully", "success");
  }
  const profileImage = () =>{
    if(avatar){
        if(avatar.includes("https://") || avatar.includes("http://")){
            return <img src={avatar} referrerpolicy="no-referrer" alt={name} />
        }
        return <img src={`https://shop.hoolo.live/images/user/${avatar}`} alt={name} />

    }
    return <img src={ userImg} alt={name} />
  }
  const userProfile = () =>{
    const social = localStorage.getItem('social');
    if(social === '1'){
        return <img src={avatar} referrerpolicy="no-referrer"  alt={userName} />
      }
      return <img src={avatar ? `https://shop.hoolo.live/images/user/${avatar}`:user} alt={userName} />;
  }
  const editView = () =>{
    return(
        <div className={Classes.newComment}>
          <div className={Classes.profile}>
              {userProfile()}
          </div>
          <div className={Classes.text}>
              <textarea name="comment" value={credentials.comment} onChange={credentialHandler} />
          </div>
          <div className={Classes.send}>
              <Button variant="none" size="sm" title="post" onClick={submitHandler}>
              <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
          </div>
      </div>
    );
  }
  const commentView = () =>{
    return(
        <div className={Classes.previousComment}>
            <div className={Classes.profile}>
                {profileImage()}
            </div>
            <div className={Classes.comments}>
                <div>
                    <small>
                        {comment}
                    </small>
                </div>
                <div>
                    {
                        //comment like button
                        /*
                        <Button variant="none" size="sm" onClick={likeHandler}>
                            <small className={like && Classes.likeActive}>Like</small>
                        </Button>
                        */
                    }
                    { user === 1 ? (
                        <>
                            <Button variant="none" size="sm" onClick={editBtn}>
                                <small>Edit</small>
                            </Button>
                            <Button variant="none" size="sm" onClick={deleteBtn}>
                                <small>Delete</small>
                            </Button>
                        </>
                    ): null}
                </div>
            </div>
        </div>
    );
  }
  return (
    <div className={Classes.commentcard}>
        {edit === false ? commentView() : editView()}
    </div>
);
}

export default GetComment

