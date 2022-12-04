import React,{useEffect} from 'react';
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {AiFillFacebook} from 'react-icons/ai';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import './Footer-item.css';
import top from './resources/top_img.svg';
import man1 from './resources/nafi.jpg';
import man2 from './resources/rafi.jpg';
import man3 from './resources/farzana.jpg';
import man4 from './resources/aman.jpg';
import meet from './resources/meet.svg';
import ques from './resources/ques.jpg';

const Aboutus = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
      <>
        <ContentWrapper>
            <Container fluid>
                    <div id="home" className="home">
                    <div className="text-vcenter">
                        <h1>Hoolo</h1>
                        <h3>Unlimited social shopping</h3>
                        <Link id="aboutbtn" className="btn btn-default btn-lg" to="/">Visit Hoolo.live</Link>

                    </div>
                </div>

                <div id="about" className="pad-section">
                    <div id="about" className="container">
                        <div className="div-about">
                            <h3 className="head-txt">About Hoolo</h3>
                            <p className="p-txt">
                                Hoolo.live is a multivendor social commerce platform that connects retailers and brands with a community of buyers through creative videos and live contents. Thus, the platform allows vendors to stand out with innovative content and build a follower base of potential buyers around their social persona or channel. 
                                The platform makes it easy for vendors to upload a video and tag products to it, thus enabling the sellers to reach potential buyers with video contents packed with details and creativity that were simply not possible with just pictures. 
                                Moreover, users can follow their favorite vendor channels and be kept updated with their latest offerings. Thus, vendors can utilize a network of potential buyers when it comes to rolling out new collections or offers on existing products or to encourage repeat orders. 
                                By creating a new dedicated platform for retailers and brands and utilizing the first-mover advantage, Hoolo.com plans to position itself for rapid growth by building a solid user base, thus raising the entry barriers for potential competition.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="m-t" className="pad-section">
                    <div className="container div-mt">
                        <h3 className="head-txt">Our Managing Team</h3>
                        <Row className="livecontent justify-content-center">
                            
                            <Col xl={3} md={3}  sm={6} xs={12} className="mt-card"  >
                                <div id="mt-card" className="card">
                                    <img className="mt-img" src ={man1} alt ="nafi.jpg" height="800" />
                                    <div className="text mt-3">
                                        <h6>Muammer Shaharier</h6>
                                        <p className="img-txt">
                                             Founder and CEO<br/>
                                        </p>
  
                                    </div>
                                    <div className="s-i">
                                                <a style={{color:"black"}} href="#"><AiFillFacebook/></a> 
                                                <a style={{color:"black"}} href="#"><FaLinkedin/></a> 
                                                <a style={{color:"black"}} href="#"><FaTwitterSquare/></a> 
                                        
                                        </div>  
                                </div>
                                
                            </Col>
                            <Col xl={3} md={3}  sm={6} xs={12} className="mt-card"  >
                            <div id="mt-card"  className="card">
                                <img className="mt-img" src ={man2} alt ="rafi.jpg" height="600" />
                                <div className="text mt-3">
                                    <h6>Md. Ibrahim Alam</h6>
                                    <p className="img-txt">
                                        Co-founder and Director of Operations<br/>
                                    </p>

                                </div>
                                <div className="s-i">
                                    <a style={{color:"black"}} href="#"><AiFillFacebook/></a> 
                                    <a style={{color:"black"}} href="#"><FaLinkedin/></a> 
                                    <a style={{color:"black"}} href="#"><FaTwitterSquare/></a> 
                                    
                                </div>
                            </div>
                            </Col>
                            <Col xl={3} md={3}  sm={6} xs={12} className="mt-card"  >
                            <div id="mt-card"  className="card">
                                <img className="mt-img" src ={man3} alt ="farzana.jpg" height="600"/>
                                <div className="text mt-3">
                                    <h6>Farzana Yesmin Khan</h6>
                                    <p className="img-txt">
                                         Director of Vendor Onboarding<br/>
                                    </p>

                                </div>
                                <div className="s-i">
                                            <a style={{color:"black"}} href="#"><AiFillFacebook/></a> 
                                            <a style={{color:"black"}} href="#"><FaLinkedin/></a> 
                                            <a style={{color:"black"}} href="#"><FaTwitterSquare/></a> 
                                            
                                </div>
                            </div>
                            </Col>
                            <Col xl={3} md={3}  sm={6} xs={12} className="mt-card"  >
                            <div id="mt-card"  className="card">
                                <img className="mt-img" src ={man4} alt ="aman.jpg" height="600"/>
                                    <div className="text mt-3">
                                        <h6>MD Aman Ullah</h6>
                                        <p className="img-txt">
                                            Director of Marketing <br/>
                                        </p>
                                    </div>
                                    <div className="s-i">
                                            <a style={{color:"black"}} href="#"><AiFillFacebook/></a> 
                                            <a style={{color:"black"}} href="#"><FaLinkedin/></a> 
                                            <a style={{color:"black"}} href="#"><FaTwitterSquare/></a> 
                                            
                                    </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div id="why-div" className="pad-section">
                    <div id="why-container" className="container">
                        <div className="div-why">
                            <h3 className="head-txt">Why Hoolo?</h3>
                            <p className="p-txt">
                                Hoolo provides its merchants and users with the best
                                of both worlds by combining the social aspects of 
                                F-commerce with the ease of use, safety and trust,
                                competitive prices and speedy delivery of e commerce
                                with none of their drawbacks. 
                                It is crucial for Hoolo to focus heavily on the 
                                experience of the end-user. The platform must ensure 
                                the right kind of products is available with the right 
                                pricing strategy and communication strategy that showcases 
                                these products with engaging content. Thus, Hoolo plans to 
                                leverage this whole ecosystem of content, community, 
                                and influencer networks to quickly penetrate the market.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="ov-div" className="pad-section">
                    <div id="ov-container" className="container">
                        <div className="div-ov">
                            <h3 className="head-txt">Our Vision</h3>
                            <p className="p-txt">
                            The Human race is not the most successful because 
                            of their strength or even their intellect, rather 
                            it is because they are social animals. Humans have 
                            the innate ability to form communities and cultures; 
                            form a group with a common set of values and beliefs. 
                            At Hoolo, we believe, that feeling like you belong is 
                            one of the most basic human desires. We have fashioned 
                            the concept of Hoolo around this very belief. We are 
                            committed to providing our users with the most customized 
                            experience tailored to their specific preferences, interests, and choices. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="c-info container">
                    <p>Trade License No: <Link to="/trade-license"><b>TRAD/DNCC/000911/2021</b></Link></p>
                    <p>Taxpayer's Identification Number (TIN): <b>177164555004</b> </p>
                    <p>Incorporation No: <b>C-180890/2022</b> </p> 
                </div>
                
            </Container>
        </ContentWrapper>
      </>
    );
  };
  
  export default Aboutus;
  