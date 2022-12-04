import React,{useState} from 'react'
import userImg from './user.png';
import { Button } from 'react-bootstrap';
import Classes from './comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

function Editcomment() {
    const initial = { user_id: 1, user:'admin', video_id:1,status: 1,email:'admin@gmail.com',comment: 'hello'};
    const [credentials, setCredentials]=useState(initial);
    const credentialHandler = (event) =>{
        const {name,value} = event.target;
        setCredentials({...credentials,[name]:value});
    }
    const submitHandler = () =>{
        console.log(credentials);
    }
    return(
        <div className={Classes.newComment}>
            <div className={Classes.profile}>
                <img src={userImg} alt='user' />
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

export default Editcomment
