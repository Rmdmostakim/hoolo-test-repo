import React,{useEffect} from 'react';
import LiveStream from '../components/Livestream/LiveStream.js';
function Lives() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <LiveStream/>
    );
}

export default Lives;
