import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo,showFilter } from '../features/AppSlice';
import { showCart } from '../features/CartSlice';
import VideoCase from '../components/Video/VideoCase';
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import Noresult from '../components/loading/Noresult';
import '../components/Video/Video.css';
import Upcoming from '../components/Upcoming/Upcoming';
import DiscoverSlider from '../components/DiscoverSlider/DiscoverSlider'
function Trending() {
    const dispatch = useDispatch();
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
        let data = videos;
        if(searchValue){
            data = videos.filter(video => video.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            video.store_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
            <div className='container mv1'>
                <div>
                    <Container className="upcomingdiv mb-2" style={{marginTop:'4rem'}}>
                        <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
                            <h5 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'500'}}>Upcoming Lives</h5><box-icon name='circle' type='solid' animation='flashing' color='#3fda36' ></box-icon>
                        </div>
                        <Upcoming/>
                    </Container>
                    <Container className="discoversliderdiv mb-4">
                        <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
                            <h5 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'500'}}>Deals You Don't Want To Miss</h5><box-icon name='party' animation='tada' ></box-icon>
                        </div>
                        <DiscoverSlider/>
                    </Container>

                </div>
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

export default Trending;

