import React from 'react';
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import './LiveStream.css';
import LiveVideoPlayer from '../Upcoming/liveVideoPlayer';
import cat from '../../assets/images/cathoolo.png'
const Recorded = () => {
    const data = [
        {cover:'https://shop.hoolo.live/public/products/rFaP3YW0fBP1jYbgjd3y8C4i9k4HIG.jpg',src:'https://shop.hoolo.live/public/videos/BgpmnpVN3XCwHYAwjMTx1WINlGV3rA.mp4'},
        {cover:'https://shop.hoolo.live/public/products/j6PylNG5tIMTljk4cce5duk0yWHf7t.jpg',src:'https://shop.hoolo.live/public/videos/t90PdLEh5guHVgArOmh1nFMWJMIZLs.mp4'},
        
        {cover:'https://shop.hoolo.live/public/products/rFaP3YW0fBP1jYbgjd3y8C4i9k4HIG.jpg',src:'https://shop.hoolo.live/public/videos/BgpmnpVN3XCwHYAwjMTx1WINlGV3rA.mp4'},
        {cover:'https://shop.hoolo.live/public/products/j6PylNG5tIMTljk4cce5duk0yWHf7t.jpg',src:'https://shop.hoolo.live/public/videos/t90PdLEh5guHVgArOmh1nFMWJMIZLs.mp4'},
    
        {cover:'https://shop.hoolo.live/public/products/rFaP3YW0fBP1jYbgjd3y8C4i9k4HIG.jpg',src:'https://shop.hoolo.live/public/videos/BgpmnpVN3XCwHYAwjMTx1WINlGV3rA.mp4'},
        {cover:'https://shop.hoolo.live/public/products/j6PylNG5tIMTljk4cce5duk0yWHf7t.jpg',src:'https://shop.hoolo.live/public/videos/t90PdLEh5guHVgArOmh1nFMWJMIZLs.mp4'},
      ];
    return (
        <ContentWrapper>
            <div className='liverecorded'>
            <h5 style={{paddingTop:'25px',paddingBottom:'5px'}}>In Case You Missed It</h5>
                <Row className="livecontent justify-content-center">
                {data && data.map((data)=>{
                    return(
                    <Col xl={3} md={3}  sm={6} xs={12} className="mb-2"  >
                        <div className="RecordedLiveVideoCard">
                        <div className='Recorded livecardheader'>
                            <div className='livestoreLogo'>
                                <img className='livestoreLogo' src ={cat}></img>
                                <b className='livestorename' style={{color:'white'}}> bing bang</b>
                            </div>
                            <div className='liveping' style={{color:'white'}}>
                            ping
                            </div>
                            
                        </div> 
                        <div className='Recorded livevidcard'>
                            <LiveVideoPlayer cover={data.cover} src={data.src}/>
                        </div>
                        <div className='Recorded livecardfooter'>
                            <div className='livevidtitle'>
                            <b className='vidtitle' style={{color:'white'}}> bing bang ting tang ching chang mang mang</b>
                            </div>
                        </div> 
                        </div>
                    </Col>
                    );
                })}
                </Row>
            </div>
        </ContentWrapper>
      );
}
export default Recorded;