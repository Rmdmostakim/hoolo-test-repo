import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideo,getCategory, getStore, getBrand } from './features/AppSlice';
import Approutes from './routes/Approutes';

//
import "./App.css";
import "video-react/dist/video-react.css";
import "bootstrap/dist/css/bootstrap.css";
import Live from "./components/Live/Live";
import { getCart } from './features/CartSlice';
import { getFollow } from './features/FollowSlice';

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('id');

  useEffect(()=>{
    dispatch(getVideo());
    dispatch(getBrand());
    dispatch(getCategory());
    dispatch(getStore());
    if(userId){
			dispatch(getCart());
      dispatch(getFollow());
		}
  },[dispatch,userId]);
  
  return (
    <Approutes/>
  )
}

export default React.memo(App);
