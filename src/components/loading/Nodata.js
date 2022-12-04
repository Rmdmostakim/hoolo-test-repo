import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import nodata from '../../assets/icons/nodata.gif';
function Nodata() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>Go add some products in your cart!</p>
            <img className='loadimg' style={{ width:'250px',height:'250px' }} src={nodata} alt="loading"/>
            <div className='homebtn'>
                <Link to="/shop" className="btn btn-sm">
                    Back to Shop
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Nodata;