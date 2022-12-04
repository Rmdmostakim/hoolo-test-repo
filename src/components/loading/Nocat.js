import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import nocat from '../../assets/icons/nocat.gif';
function Nocat () {
        useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>No Product In This Category Yet!!</p>
            <img className='loadimg' src={nocat} alt="loading"/>
            <div className='homebtn'>
                <Link to="/collection" className="btn btn-sm">
                    Browse Other Categories
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Nocat;