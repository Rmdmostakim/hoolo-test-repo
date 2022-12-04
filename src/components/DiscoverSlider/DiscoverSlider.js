import React,{useEffect, useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
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
const DiscoverCampaign = (props) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: true,
    arrows : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const loadingView = () => {
    return <Loader/>
  }
  const nodataView = () =>{
    return <Nooffer/>
  }

  const campaignView = () =>{
    return (
      <div>
        <Slider {...settings}>
            {campaigns.map((camp)=>{
              return(
                <div key={camp.id} className={Classes.campaign}>
                  <Link to={`/discover/${camp.slug}`}><img src={camp.cover} alt={camp.title}/></Link>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }

  return (
        <div>
          {isLoading && loadingView()}
          {!campaigns || campaigns.length ===0 && nodataView()}
          {campaigns && campaignView()}
        </div>
  );
}

export default DiscoverCampaign;
