import React,{useEffect, useState} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DiscoverSlider.css'
import axios from "axios";
import { Link } from "react-router-dom";
import Classes from '../../assets/css/disocover.module.css';
import Servererror from '../../components/loading/Servererror';
import Nooffer from '../../components/loading/NoOffer';
import Loader from '../../components/loading/load';
import Demo1 from './Disimgs/demo1.png';
import Demo2 from './Disimgs/demo2.png';
import Demo3 from './Disimgs/demo3.png'
const DiscoverBigSlide = (props) => {
  const [isLoading,setIsloading] = useState(true);
  const [campaigns,setCampaigns] = useState(null);
  const [serverError,setServerError] = useState(false);
  useEffect(()=>{
    axios.get('https://shop.hoolo.live/api/campaigns')
    .then((res)=>{
      setCampaigns(res.data);
      setIsloading(false);
    })
    .catch(()=>{
      setCampaigns(null);
      setIsloading(false);
      setServerError(true);
    });
  });
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: true,
    arrows : false,
  };


    return (
        <Slider {...settings}>
            <div className='discoverbigimgdiv' style={{position:'relative'}}>
              <Link to='/vendors/products/97b5dbb9-c168-4058-a4f2-06b9fe237e10'>
                  <img className='discoverbigimg' src={Demo1}></img>
                  <div className='shopnowdiv' style={{position:'absolute',width:'100%',textAlign:'center'}}>
                    <Button className='shopnow' size="sm" variant='none'>Shop Now</Button>
                  </div> 
              </Link>
            </div>
            <div className='discoverbigimgdiv' style={{position:'relative'}}>
            <Link to='/vendors/products/97b210bf-0c33-4f4a-8a80-f5161cec43b0'>
                <img className='discoverbigimg' src={Demo2}></img>
                <div className='shopnowdiv' style={{position:'absolute',width:'100%',textAlign:'center'}}>
                  <Button className='shopnow' size="sm" variant='none'>Shop Now</Button>
                </div> 
            </Link>
          </div>
          <div className='discoverbigimgdiv' style={{position:'relative'}}>
          <Link to='/vendors/products/97792973-7984-42a3-b32b-16004682f882'>
              <img className='discoverbigimg' src={Demo3}></img>
              <div className='shopnowdiv' style={{position:'absolute',width:'100%',textAlign:'center'}}>
                <Button className='shopnow' size="sm" variant='none'>Shop Now</Button>
              </div> 
          </Link>
        </div>

        </Slider>
    );

}

export default DiscoverBigSlide;