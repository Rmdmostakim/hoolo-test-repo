import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import Shy from '../../assets/icons/shy.gif';
function Novid() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]); 
    return (
        <Container fluid>
            <div className='container load'>
            <p className='titletxt'>This store has no video yet!</p>
            <img className='loadimg' src={Shy} alt="loading"/>
            <div className='homebtn'>
                <Link to="/" className="btn btn-sm">
                    Go Home
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Novid;