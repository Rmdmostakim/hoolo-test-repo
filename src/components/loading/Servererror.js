import React,{useEffect} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import servererror from '../../assets/icons/servererror.gif';
function Servererror(props) {
    const {retry} = props;
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid>
            <div className='container load'>
                <img className='loadimg' src={servererror} alt="loading"/>
                <p className='titletxt'>Please Try Again After Some Time</p>
                <div className='homebtn'>
                <button className="btn btn-sm" onClick={retry}>
                    Retry
                </button>
            </div>
            </div>
        </Container>
        );
    }
    
export default Servererror;