import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button,Nav} from 'rsuite';
import {MdAccountBalanceWallet} from 'react-icons/md';
import {FaTruck} from 'react-icons/fa';
import {TbTruckReturn} from 'react-icons/tb';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Placeholder } from 'rsuite';
import Ordercard from './Ordercard';

export default function Orders(props) {
  const {title,handler} = props;
  const [orders,setOrders] = useState(null);
  const userId = localStorage.getItem("id");
  const baseUrl = 'https://shop.hoolo.live/api/';

  useEffect(()=>{
    async function fetch(){
      await axios
      .get(`${baseUrl}orders-by/${userId}`)
      .then((res) => {
        if(res.status === 200){
          setOrders(res.data);
        }else{
          setOrders(null);
        }
      })
      .catch(()=>setOrders(null));
    }fetch();
    window.scrollTo({
        top: 0,
    });
  },[userId]);

  const orderView = () =>{
    if(title === 'all'){
      return orders.map(order=>(<Ordercard key={order.id} order={order}/>));
    }
    if(title === 'processing'){
      const data = orders.filter(order=> order.status === 0);
      return data.map(order=>(<Ordercard key={order.id} order={order}/>));
    }
  }
  
  return (
    <Container fluid>
      <Nav appearance="subtle" justified>
        <Nav.Item active={title === 'all' ? true: false} onClick={()=>handler('all')}>
          <small>All Orders</small>
        </Nav.Item>
        <Nav.Item active={title === 'processing' ? true: false} onClick={()=>handler('processing')}>
          <MdAccountBalanceWallet/>&ensp;Processing
        </Nav.Item>
        <Nav.Item active={title === 'shipped' ? true: false} onClick={()=>handler('shipped')}>
          <FaTruck/>&ensp;Shipped
        </Nav.Item>
        <Nav.Item active={title === 'returned' ? true: false} onClick={()=>handler('returned')}>
          <TbTruckReturn/>&ensp;Returned
        </Nav.Item>
      </Nav>
      <div className='mt-2'>
        {!orders && <Placeholder.Paragraph/>}
        {orders && orderView()}
      </div>
    </Container>
  )
}
