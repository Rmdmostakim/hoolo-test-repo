import React,{useEffect} from 'react';
import SellerApply from '../components/Livestream/SellerApply';

function Streaming() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <SellerApply/>
    )
}

export default Streaming;
