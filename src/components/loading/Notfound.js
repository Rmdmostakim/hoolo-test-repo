import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import notfound from '../../assets/icons/404.gif';
function Notfound() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid  style={{ marginTop:'4rem' }}>
            <div className='container load'>
            <img className='loadimg' src={notfound} alt="loading"/>
            <div className='homebtn'>
                <Link to="/" className="btn btn-sm">
                    Go Home
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Notfound;