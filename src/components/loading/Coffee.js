import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import coffee from '../../assets/icons/coffee.gif';
function Coffee() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid>
            <div className='container load'>
            <p className='titletxt'>Want To Be A Part Of Hoolo?</p>    
            <img className='loadimg' src={coffee} alt="loading"/>
            <div className='homebtn'>
                <Link to="/" className="btn btn-sm">
                    Have A Coffee With Us
                </Link>
            </div>
            
            </div>
        </Container>
        );
    }
    
export default Coffee;