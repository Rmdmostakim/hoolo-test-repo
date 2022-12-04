import React from 'react';
import Classes from './comment.module.css';
import PostComment from './PostComment';
import Getcommments from './Comments';
function Replies(props) {
    const {comments,parent,video} = props;
    return(
        <>
        <div className={Classes.commentcard}>
            {comments && comments.map((comment)=>{
                const replies = comments.filter((data)=>{
                    return comment.id === data.parent_id;
                  });
                  return <Getcommments key={comment.id} comment={comment} replies={replies} replyable={false}/>
            })}
            <PostComment id={video} parent={parent}/>
        </div>
        </>

    );
}

export default Replies;

