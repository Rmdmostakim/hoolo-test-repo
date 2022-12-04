import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import noresult from '../../assets/icons/noresult.gif';
function Notfound() {
        useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>No Result Found!</p>
            <img className='loadimg' src={noresult} alt="loading"/>
            </div>
        </Container>
        );
    }
    
export default Notfound;