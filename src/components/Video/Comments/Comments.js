import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Classes from './comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import swal from "sweetalert";
import userImg from './user.png';
import Replies from './Replies';
import { useDispatch } from 'react-redux';
import { updateComment,deleteComment, getComment } from '../../../features/AppSlice';


function Comments(props) {
    const {comment,replies,replyable} = props;
    console.log(comment);
    const dispatch = useDispatch();
    const id = localStorage.getItem("id");
    const [like,setLike] = useState(false);
    const likeHandler = () => setLike(!like);
    const [replyShow,setReplyShow] = useState(false);
    const replyHandler = () => setReplyShow(!replyShow);
    const commentProfile = () =>{
        const {user_image,user} = comment;
        if(user_image){
            if(user_image.includes("https://") || user_image.includes("http://")){
                return <img src={user_image} referrerPolicy="no-referrer" alt={user} />
            }
            return <img src={`https://shop.hoolo.live/images/user/${user_image}`} alt={user} />
        }
        return <img src={ userImg} alt={user} />
    }
    
    const deleteBtn = () =>{
        axios.delete(`${process.env.REACT_APP_BASE_URL}/videocomment/${comment.id}`)
        .then((res)=>{
            if(res.status === 200){
                dispatch(getComment());
            }else{
                swal('Delete failed','','error');
            }
        })
        .catch((error)=>{
            swal('Delete failed','','error');
        });
    }
    //edit handlers
    const [edit,setEdit] = useState(false);
    const editBtn = () => setEdit(true);
    const initial ={comment: comment.comment};
    const [credentials, setCredentials]=useState(initial);
    const credentialHandler = (event) =>{
        const {name,value} = event.target;
        setCredentials({...credentials,[name]:value});
    }
    const submitHandler = () =>{
        axios.put(`${process.env.REACT_APP_BASE_URL}/videocomment/${comment.id}`,credentials)
        .then((res)=>{
            if(res.status === 200){
                setEdit(false);
                dispatch(getComment());
            }else{
                swal('Comment update failed','','errror');
            }
        })
        .catch((error)=>{
            swal('Comment update failed','','errror');
        });
    }
    const editView = () =>{
        return(
            <div className={Classes.newComment}>
              <div className={Classes.profile}>
                  {commentProfile()}
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
            <>
                <div className={Classes.previousComment}>
                    <div className={Classes.profile}>
                        {commentProfile()}
                    </div>
                    <div className={Classes.comments}>
                        <div>
                            <div>
                                <small className="font-weight-bold">{comment.user}</small>
                            </div>
                            <div>
                                <small>
                                    {comment.comment}
                                </small>
                            </div>
                        </div>
                        <div>
                            {
                                // comment like button
                                /*
                                <Button variant="none" size="sm" onClick={likeHandler}>
                                    <small className={like ? Classes.likeActive : null}>Like</small>
                                </Button>
                                */
                            }
                            {replyable===true && (
                                <Button variant='none' size='sm' onClick={replyHandler}>
                                    <small className={replyShow ? Classes.replyActive : null}>{replies.length} Reply</small>
                                </Button>
                            )}
                            
                            { parseInt(id) === comment.user_id && (
                                <>
                                    <>
                                        <Button variant="none" size="sm" onClick={editBtn}>
                                            <small>Edit</small>
                                        </Button>
                                        <Button variant="none" size="sm" onClick={deleteBtn}>
                                            <small>Delete</small>
                                        </Button>
                                    </> 
                                </>
                            )}
                            {replyShow && <Replies video={comment.video_id} parent={comment.id} comments={replies}/>}
                        </div>
                    </div>
                </div>
            </>   
        );
    }
    return(
        <div className={Classes.commentcard}>
            {edit === false ? commentView() : editView()}
        </div>
    );
}

export default Comments;

