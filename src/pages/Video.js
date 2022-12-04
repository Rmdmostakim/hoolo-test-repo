import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo,showFilter } from '../features/AppSlice';
import { showCart } from '../features/CartSlice';
import VideoCase from '../components/Video/VideoCase';
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import Noresult from '../components/loading/Noresult';
import { useParams } from 'react-router-dom';

function Video() {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const {videos,comments,likes,products,users,follows,videoLoading,videoError,videoSuccess,searchValue} = useSelector((state)=>state.app);
    const hideHandler = () =>{
        dispatch(showCart(false));
        dispatch(showFilter(false));
    }
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);

    const retry = () =>{
        dispatch(getVideo());
    }

    const trending = () =>{
        let data = videos.filter(video=>video.slug === slug);
        if(searchValue){
            data = videos.filter(video => video.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            video.store_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
            <div className='container' id="content-wrapper">
                <VideoCase 
                video={data} 
                comments={comments} 
                likes={likes} 
                follows={follows} 
                products={products} 
                users={users}
            /> 
            </div>   
        );
    }

    return (
        <div>
            {videoLoading && <Loader/>}
            {videoError && <Servererror retry={retry}/>}
            {videoSuccess && trending()}
        </div>
    )
}

export default Video;