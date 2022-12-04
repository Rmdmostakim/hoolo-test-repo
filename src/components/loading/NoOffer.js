import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import nooffer from '../../assets/icons/noOffer.gif';
function NoOffer() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>No Ongoing Offer To Show</p>
            <img className='loadimg' src={nooffer} alt="loading"/>
            <div className='homebtn'>
                <Link to="/" className="btn btn-sm">
                    Go Home
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default NoOffer;