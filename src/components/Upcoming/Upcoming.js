import React from 'react';
import LiveVideoPlayer from './liveVideoPlayer';
import cat from '../../assets/images/cathoolo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from 'react-bootstrap';
import './Upcoming.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import dp1 from './data/dp1.jpg';
import coversadia from './data/coversadia.jpg';
import eye from './data/eye.PNG';
import skin from './data/skin.PNG';
import dpeye from './data/dpeye.jpg';
import hoolodp from './data/hoolodp.PNG';
import ridwandp from './data/ridwandp.jpeg';
import smokydp from './data/smokydp.jpeg';
import smokycov from './data/smokycov.jpeg';
import jeweldp from './data/jeweldp.jpeg';

function Upcoming() {
  const dataupcoming = [
    {cover:eye,src:'https://shop.hoolo.live/public/videos/eyeliner.mp4',dp:ridwandp, name:'Sanam Rizvan', title:'Eyeliner tutorial',status:'Upcoming'},
    {cover:skin,src:'https://shop.hoolo.live/public/videos/skincare.mov',dp:skin, name:'Meherjaan Pinky', title:'Skin care chitchat',status:'Upcoming'},
    {cover:hoolodp,src:'https://shop.hoolo.live/public/videos/hoolo.mov',dp:hoolodp, name:'Taskin Hossain', title:'Benifits of Niacinamide',status:'Upcoming'},
    {cover:coversadia,src:'https://shop.hoolo.live/public/videos/vid1.mov',dp:dp1, name:'Sadia Sultana',title:'Live From Australia On 24th November',status:'Ended'},
    {cover:smokycov,src:'https://shop.hoolo.live/public/videos/smoky.mp4',dp:smokydp, name:'Mahbuba Alam Niha', title:'Glittery Smoky Makeup Look Tutorial',status:'Upcoming'},
    {cover:jeweldp,src:'https://shop.hoolo.live/public/videos/jewel.mp4',dp:jeweldp, name:'Lamisa Rahman Orin',title:'Handmade Antique Ornaments',status:'Upcoming'},
  ];
  
  return (
    <Splide options={{
      drag: 'free',
      arrows: false,
      pagination: false,
      perPage: 1,
      gap: '8px',
      fixedWidth: '200px',
      fixedHeight: 'auto',
      } } aria-label="React Splide Example">
    {dataupcoming && dataupcoming.map((data)=>{
      return(
        
        <SplideSlide key={Math.random()}>
            <div className="LiveVideoCard">
              <div className='livecardheader'>
                <div className='livestoreLogo'>
                  <img style={{borderRadius:'50%', width:'40px', height:'40px'}} className='livestoreLogo' src ={data.dp}></img>
                  <b className='livestorename' style={{color:'white',paddingInline:'3px'}}>{data.name}</b>
                </div>
                <div className="ml-1" style={{ cursor:'pointer',background:'white',padding:"2px",borderRadius:'5px' }}>
                {data.status}
                </div>
                
              </div> 
              <div className='livevidcard'>
                <LiveVideoPlayer cover={data.cover} src={data.src}/>
              </div>
              <div className='livecardfooter'>
                <div className='livevidtitle'>
                  <b className='vidtitle' style={{color:'white',paddingInline:'3px'}}>{data.title}</b>
                </div>
                <div className='liversvp'>
                  rsvp
                </div> 
              </div> 
            </div>
        </SplideSlide> 
      );
    })}
    </Splide>
  );
}

export default Upcoming;