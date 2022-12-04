import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getVideo } from '../features/AppSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getFollow } from '../features/FollowSlice';
import VideoCase from '../components/Video/VideoCase';
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import toast from 'react-hot-toast';
import Nofollow from '../components/loading/Nofollow';
import Noresult from '../components/loading/Noresult';
import '../components/Video/Video.css';
function Following() {
    const {follow,followLoading,followSuccess,followError} = useSelector((state)=>state.follow);
    const {videos,follows,likes,comments,products,users,videoLoading,videoError,videoSuccess,searchValue} = useSelector((state)=>state.app);
    const userId = localStorage.getItem('id');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const retry = () =>{
        if(followError){
            dispatch(getFollow());
        }
        if(videoError){
            dispatch(getVideo());
        }
    }

    const following = () =>{
        let data = videos.filter((video)=>follow.includes(video.store_id));
        if(data.length<=0){
            return <Nofollow/>
        }
        if(searchValue){
            data = data.filter(video => video.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            video.store_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }

        return (
            <div id="content-wrapper">
                <div className='container mv1'>
                    <VideoCase 
                        video={data} 
                        comments={comments} 
                        likes={likes} 
                        follows={follows} 
                        products={products} 
                        users={users}
                    />   
                </div>

            </div>   
        );
    }

    useEffect(()=>{
        if(!userId){
            toast.error('You have to login first!');
            navigate('/login',{replace:false});
        }
        if(userId && !follow){
            dispatch(getFollow());
        }
    },[userId,follow,dispatch,navigate]);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);

    return (
        <div>
            {videoLoading || followLoading ? <Loader/>:null}
            {videoError || followError ? <Servererror retry={retry} />: null}
            {videoSuccess && followSuccess ? following(): null}
        </div>
    );
}

export default Following;
