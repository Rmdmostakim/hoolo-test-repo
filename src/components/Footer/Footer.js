import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Classes from './footer.module.css';
import hoolo from '../../assets/images/hoolo.svg';
import bkash from '../../assets/images/bkash.svg';
import nagad from '../../assets/images/nagad.svg';
import card from '../../assets/images/card.svg';
import ssl from '../../assets/images/ssl.png'; 
import sslsm from '../../assets/images/ssl-sm.jpg'; 


function Footer() {
    return (
        <Container fluid className={`${Classes.box} p-3 mt-5 ${Classes.footerContainer}`}>
            <Row className=' justify-content-around'>
                <Col md={3} sm={12} className='mb-2'>
                    <div className={Classes.branding}>
                        <img src={hoolo} alt="hoolo" />
                        
                        
                    </div>
                </Col>

                <Col md={3} sm={12} className='mb-2'>
                    <div className={Classes.info}>
                        <h6 className='font-weight-bold'>Company Info</h6>
                        <div className={Classes.link}>
                            <li><Link className=' font-weight-bold text-black-50' to="/about-us">About Us</Link></li>
                            <li><Link className=' font-weight-bold text-black-50' to="/terms-and-condition">Terms & Conditions</Link></li>
                            <li><Link className=' font-weight-bold text-black-50' to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className=' font-weight-bold text-black-50' to="/return-and-refund">Return & Refunds</Link></li>
                            <li><Link className=' font-weight-bold text-black-50' to="/seller-agreement">Seller Agreement</Link></li>
                        </div>
                    </div>
                </Col>
                <Col md={3} sm={12} className='mb-2'>
                    <div className={Classes.info}>
                        <h6 className='font-weight-bold'>Get Onboard</h6>
                        <div className={Classes.link}>
                            <li><Link className=' font-weight-bold text-black-50' to="/partnership">Have A Coffee With Us</Link></li>
                        </div>
                        <div className={Classes.link}>
                            <li><Link className=' font-weight-bold text-black-50' to="/sellerform">Apply for Seller</Link></li>
                        </div>
                    </div>
                </Col>
                <Col md={3} sm={12} className='mb-2'>
                    <div className={`${Classes.info} ${Classes.contactlist}`}>
                        <h6 className='font-weight-bold'>Contact Us</h6>
                        <div>
                            <li className='contactlist'>476/C, Malibagh DIT Road, Dhaka- 1219</li>
                            <li className='contactlist'>Contact: <a href="tel:+8801798776997">(+880)1798776997</a></li>
                            <li className='contactlist'>E-mail:<a href="mailto:operations@hoolo.live">operations@hoolo.live</a></li>
                        </div>
                    </div>
                </Col>

            </Row>
            <hr/>
            <p className='text-center text-dark'>Copyright © 2021-2022 - hoolo.live. All rights reserved.</p> 
        </Container>
    );
}

export default Footer;
