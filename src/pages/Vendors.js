import React,{useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getVideo,showFilter} from '../features/AppSlice';
import { showCart } from '../features/CartSlice';
import VideoCase from '../components/Video/VideoCase';
import Loader from '../components/common/Loader';
import ShopTwo from '../components/ShopTwo/Shop';
import Servererror from '../components/loading/Servererror';
import Novid from '../components/loading/Novid';
import Nopro from '../components/loading/Nopro';
import Noresult from '../components/loading/Noresult';
import '../components/Video/Video.css';

function Vendors() {
    const {uuid} = useParams();
    const {videos,follows,likes,comments,products,users,brands,videoLoading,videoError,videoSuccess,searchValue} = useSelector((state)=>state.app);
    const dispatch = useDispatch();
    const location = useLocation();

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

    const vendorsVideos = () =>{
        let data = videos.filter(video=>video.store_uuid === uuid);
        if(data.length<=0){
            return <Novid/>
        }
        if(searchValue){
            data = data.filter(video => video.title.toLowerCase().includes(searchValue.toLowerCase()) || 
            video.store_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
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
        );
    }

    const vendorProducts = () =>{
        let data = products.filter(product=>product.store.uuid === uuid);
        if(data.length<=0){
            return <Nopro/>
        }
        if(searchValue){
            data = data.filter( product=>product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
            <ShopTwo products={data} brand={brands} />
        );
    }

    const render = () =>{
        const {pathname} = location;
        if(pathname.includes('products')){
            return vendorProducts();
        }else{
            return vendorsVideos();
        }
    }

    return (
        <div>
            {videoLoading && <Loader/>}
            {videoError && <Servererror retry={retry} />}
            {videoSuccess && render()}
        </div>
    )
}

export default Vendors
