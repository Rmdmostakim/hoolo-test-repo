/* eslint-disable no-undef */
import React,{useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCart } from '../../features/CartSlice';
import Spinner from 'react-bootstrap/esm/Spinner';
import toast from 'react-hot-toast';
import bkashIco from './bkash.svg';
import codIcon from './cod.svg';

import { Col, Container, Row } from 'react-bootstrap';
import './payment.css';

export default function Payments() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseUrl = 'https://shop.hoolo.live/api/';
  const [orderLoading,setOrderLoading] = useState(false);

  const bkash = useCallback(() => {
    const amount = state.cart.reduce(function(sum, cart) {
      return sum + cart.product.unit_price*cart.qty;              
     }, 0);

    let paymentId = null;
    bKash.init({ 
      paymentMode: 'checkout',
      paymentRequest: { 
        amount: Number(amount)+Number(state.shipping),
        carts:state.cart,
        user_id: state.userId,
        address:state.address,
        payment_method:'bkash',
        shipping:state.shipping,
        intent: 'sale' 
      }, 
      createRequest: function(request) { 
        axios.post(`${baseUrl}create-orders`,request).then((res)=>{
                if(res.status === 200){
                    paymentId = res.data.response.paymentID;
                    bKash.create().onSuccess(res.data.response);
                }else{
                    const response = bKash.create().onError();
                    navigate('/',{replace:true});
                    toast.error('Order place failed!');
                }
                console.log(res.data);
            }).catch(()=>toast.error('Server error.Please try again'));
      },
      executeRequestOnAuthorization: function() { 
        axios.post(`${baseUrl}bkash-execute/${paymentId}`)
        .then((res)=>{
                if(res.data.status === 201){
                  navigate('/',{replace:true});
                  toast.success(res.data.message);
                }
                else{
                  navigate('/',{replace:true});
                  toast.error(res.data.message);
                }
            })
            .catch(()=>toast.error('Server error.Please try again'));
      } ,
      onClose:function(){
        axios.get(`${baseUrl}bkash-cancel/${paymentId}`).then((res)=>{
          if(res.status === 200){
            navigate('/',{replace:true});
            toast.error(res.data.message);
          }
        }).catch(()=>toast.error('Server error.Please try again'));
        
      }
    });
  }, []);
  
  useEffect(()=>{
    if(!state || !state.cart || !state.address){
      navigate('/',{replace:true});
    }else{
      bkash();
    }
  },[]);

  const codHandler = () =>{
    setOrderLoading(true);
    const post = {
      carts:state.cart,
      user_id: state.userId,
      address:state.address,
      payment_method:'cod',
      shipping:state.shipping,
    };
    axios.post(`${baseUrl}create-orders`,post)
    .then((res)=>{
      if(res.status === 201){
        toast.success('Order placed successfully!');
        navigate('/',{replace:true});
        dispatch(getCart());
      }else{
        toast.error('Order place failed!');
        setOrderLoading(false);
      }
    })
    .catch(()=>{
      toast.error('Order place failed!');
      setOrderLoading(false);
    });
  };

  return (
    <Container className="mt-5">
<div>
{
  orderLoading ? (
    <div className="payment-page">
      <Spinner animation="border" size="sm" />
    </div>
  ):(
    <div className="payment-page">
    <h4 style={{ textAlign:'center' }}>Choose Your Payment Method</h4>
    <Row className="justify-content-center">
      <Col md={4} sm={6}>
        <div className='cashPayment card'>
          <img className='paymentImg' src={codIcon} alt='cod' />
          <h6 className='payText'>For cash on delivery click below</h6>
          <button className='payButton' onClick={codHandler}>Cash on Devilvery</button>
        </div>
      </Col>
      <Col md={4} sm={6}>
          <div className='bkashPayment card'>
            <img className='paymentImg' src={bkashIco} alt='cod' />
            <h6 className='payText'>For bkash payment click below</h6>
            <button className='payButton'  id="bKash_button">Pay with Bkash</button>
          </div>
      </Col>

    </Row>
  </div>
  )
}
</div>
    </Container>
  )
}
