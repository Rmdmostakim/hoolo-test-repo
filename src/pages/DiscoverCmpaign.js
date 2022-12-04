import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Classes from '../assets/css/disocover.module.css';
import Servererror from '../components/loading/Servererror';
import Nooffer from '../components/loading/NoOffer';
import Loader from '../components/loading/load';
import DiscoverBigSlide from "../components/DiscoverSlider/DiscoverBigSlide";
import Collection from './Collection'
import CatSlide from '../components/DiscoverSlider/CatSlide'
import BrandSlide from './../components/Brands/BrandSlider';
import Brands from "../components/Brands/Brands";
const DiscoverCampaign = (props) => {
  const {categories,catLoading,catSuccess,catError,searchValue} = useSelector((state)=>state.app);
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
  },[]);

  const servererrorView = () =>{
    return <Servererror/>
  }
  const loadingView = () => {
    return <Loader/>
  }
  const nodataView = () =>{
    return <Nooffer/>
  }

  const campaignView = () =>{
    return (
      <div>
        <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
          <h3 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'500'}}>Hot Deals</h3><box-icon name='hot' type='solid' animation='burst' color='#ff7500' ></box-icon>
        </div>
        <Row className="justify-content-center mt-2">
          {campaigns === null ? <Nooffer/> : campaigns.map((camp)=>{
            return(
              <Col key={camp.id} md={4} sm={12} className="mb-2">
                <div className={Classes.campaign}>
                  <Link to={`/discover/${camp.slug}`}><img src={camp.cover} alt={camp.title}/></Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }

  return (
      <Container>
        <div style={{marginTop: '4rem'}}>
        {isLoading && catLoading && loadingView()}
        {serverError && catError && servererrorView()}
          <DiscoverBigSlide/>
          <div className='mt-3'>
            <div className="explorediv" style={{display:'flex',alignItems:'center',justifyContent: 'space-between'}}>
              <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
                <h3 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'500'}}>Explore</h3><box-icon name='gift' type='solid' animation='tada' color='#ff7181' ></box-icon>
              </div>
              <Link to="/collection">
              <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
                  <h6 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'400',color:'black'}}>See All</h6><box-icon name='right-arrow-alt' animation='flashing' ></box-icon>
                </div>
              </Link>  
            </div>

            {catSuccess && <CatSlide/>}
          </div>
          <div className="mt-4">
            <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
              <h3 style={{paddingTop:'6px',marginRight:'2px',fontWeight:'500'}}>Shop By Brands</h3><box-icon name='heart' type='solid' animation='flashing' color='#ff0505' ></box-icon>
            </div>
            <BrandSlide/>
          </div>
          <div className="mt-3">
            {!campaigns || campaigns.length ===0 && nodataView()}
            {campaigns && campaignView()}
          </div>
        </div>

      </Container>
  );
}

export default DiscoverCampaign;