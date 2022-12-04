import React from 'react';
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import LiveVideoPlayer from '../Upcoming/liveVideoPlayer';
import cat from '../../assets/images/cathoolo.png'
import {swiper} from 'swiper/react';
import Recorded from './Recorded'
import Upcoming from '../Upcoming/Upcoming';
import DiscoverSlider from '../DiscoverSlider/DiscoverSlider'

const LiveStream = () => {
  return (
    <ContentWrapper>
      <div className="container">
        <div style={{display:'flex',alignItems:'center',marginBottom:'2px'}}>
        <h5 style={{paddingTop:'6px',marginRight:'2px'}}>Upcoming Lives</h5><box-icon name='circle' type='solid' color='#19c94b' ></box-icon>
        </div>
        
            <div className='livecardsContainer'>
              <Upcoming/>
            </div>

          <div className='slider'>
            <DiscoverSlider/>
          </div>
          <div className='liverecorded'>
            <Recorded/>
          </div>
      </div>
    </ContentWrapper>
  );
};

export default LiveStream;
