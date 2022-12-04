import React from 'react';
import { Container } from 'react-bootstrap';
import trade from '../../assets/images/trade.png';
export default function TradeLnc() {
  return (
    <div>
        <Container className='text-center'>
            <img style={{ width:'100%',height:'auto' }} src={trade} alt='tradelnc'></img>
        </Container>
    </div>
  )
}
