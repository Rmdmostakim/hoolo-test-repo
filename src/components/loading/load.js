import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import load from '../../assets/icons/load.gif';
function Load() {
            useEffect(()=>{
            window.scrollTo({
                top: 0,
            });
          },[]);
    return (
        <Container fluid style={{ marginTop:'4rem' }}>
            <div className='container load'>
                <img className='loadimg' src={load} alt="loading"/>
            </div>
        </Container>
        );
    }
    
export default Load;