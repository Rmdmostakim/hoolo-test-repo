import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import nofollow from '../../assets/icons/follow.svg';
function Nofollow() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>You Are Not Following Any Store</p>
            <img className='loadimg' src={nofollow} alt="loading"/>
            <div className='homebtn'>
                <Link to="/" className="btn btn-sm">
                    Go Home
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Nofollow;