import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import Classes from './comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import swal from "sweetalert";
import user from './user.png';
import { useDispatch } from 'react-redux';
import { getComment } from '../../../features/AppSlice';

function PostComment(props) {
  const dispatch = useDispatch();
  const userId= localStorage.getItem("id");
  const userName =  localStorage.getItem("name");
  const userEmail =  localStorage.getItem("email");
  const avatar =  localStorage.getItem("avatar");
  const initial = { user_id: userId, user:userName, video_id:props.id,status: 1,email:userEmail,parent_id:props.parent,comment: ""};
  const [credentials, setCredentials]=useState(initial);
  const credentialHandler = (event) =>{
    const {name,value} = event.target;
    setCredentials({...credentials,[name]:value});
  }
  const submitHandler = () =>{
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/videocomment`, credentials)
      .then((res)=>{
          if(res.status === 200){
            setCredentials(initial);
            dispatch(getComment());
          }else{
            swal("Failed", "", "error");
          }
      })
      .catch((error)=>{
        swal("Failed", "", "error");
      });
  }
  const profileImage = () =>{
    if(avatar === 'undefined' || avatar === 'null' || avatar === null){
      return <img src={user} alt={userName} />;
    }else{
      return <img src={avatar} referrerPolicy="no-referrer"  alt={userName} />
    }
  }
  return (
    <div className={Classes.commentcard}>
      <div className={Classes.newComment}>
          <div className={Classes.profile}>
              {profileImage()}
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
    </div>
  )
}

export default PostComment;
