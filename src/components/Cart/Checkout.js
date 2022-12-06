/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import {useSelector } from "react-redux";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import {ImBin} from 'react-icons/im';
import Select from 'react-select';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Button,Row,Col,Modal,Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/esm/Spinner';
import './checkout.css';

import {shipping,buyshipping} from '../library/shipping';
import { useCallback } from 'react';

export default function Checkout(){
  const {state} = useLocation();
  const navigate = useNavigate();
  const {carts,selectedPro,subtotal} = useSelector((state)=>state.cart);

  const baseUrl = 'https://shop.hoolo.live/api/';
  const userId = localStorage.getItem('id');

  const shippingRef = useRef();

  const [addresses,setAddresses] = useState(null);
  const [division,setDivision] = useState(null);
  const [city,setCity] = useState(null);
  const [divisionList,setDivisionList] =useState(null);
  const [cityList,setCityList] = useState([]);
  const [thanaList,setThanaList] = useState([]);
  const [zipList,setZipList] = useState([]);
  const [showAddress,setShowAdrees] = useState(false);
  const [addressError,setAddressError] = useState(null);
  const [address,setAddress] = useState(null);
  const [showshipping, setshowshipping] = useState(false);
  // new address handlers
  const initial = {user_id:userId,name:'',phone:'',division:'',city:'',thana:'',zip:'',address:'',agree:false};
  const [credentials,setCredential] = useState(initial);

  useEffect(()=>{
    if(!state && !state.path){
      navigate('/',{replace:false});
    }
    axios.get(`${baseUrl}shippingaddress/${userId}`)
    .then((res)=>{
      const {status,data} = res;
      if(status === 200){
        if(data.length>0){
          setAddresses(data);
        }
      }
    })
    .catch((error)=>{
      console.log('server error');
    });
    axios.get(`${baseUrl}hoolo/divisions`)
    .then((res)=>{
      const {status,data} = res;
      if(status === 200){
        setDivisionList(data);
      }
    })
    .catch();
  },[state,navigate,carts,selectedPro,userId,divisionList]);

  /* shippping address handler */
  const addresshandler = (event)=>{
    const {value} = event.target;
    setAddress(value);
    axios.get(`${baseUrl}shippingaddress-by/${value}`)
    .then((res)=>{
      const {status,data} = res;
      if(status === 200){
        const {city,division} = data;
        setCity(city);
        setDivision(division);
      }
    })
    .catch((error)=>{
      console.log('server error');
    });
  }
  const removeAddressHandler = (id) =>{
    axios.get(`https://shop.hoolo.live/api/remove-shippingaddress/${id}`)
    .then((res)=>{
      if(res.status === 200){
        toast.success('Address removed successfully!');
        window.location.reload();
      }else{
        toast.error('Address remove failed!');
      }
    })
    .catch(()=>{
      toast.error('Address remove failed!');
    });
  }
  const credentialHandler = (event) =>{
    const {name,value} = event.target;
    setCredential({...credentials,[name]:value});
  }
  const divisionHandler = (event) =>{
    if(event){
      const {value} = event;
      setCredential({...credentials,division:value});
      axios.get(`${baseUrl}hoolo/cities`)
      .then((res)=>{
        const {status,data} = res;
        if(status === 200){
          setCityList(data);
        }
      }).catch();
    }else{
      setCredential({...credentials,division:''});
    }
  };
  const cityHandler = (event) =>{
    if(event){
      const {value} = event;
      setCredential({...credentials,city:value});
      axios.get(`${baseUrl}hoolo/${value}/thanas`)
      .then((res)=>{
        const {status,data} = res;
        if(status === 200){
          setThanaList(data);
        }
      })
      .catch();
    }else{
      setCredential({...credentials,city:''});
    }
  };
  const thanaHandler = (event) =>{
    if(event){
      const {value} = event;
      setCredential({...credentials,thana:value});
      if(credentials.city !== ''){
        axios.get(`${baseUrl}hoolo/${credentials.city}/${value}/zip`)
        .then((res)=>{
          const {status,data} = res;
          if(status === 200){
            setZipList(data);
          }
        })
        .catch();
      }
    }else{
      setCredential({...credentials,thana:''});
    }
  };
  const zipHandler = (event) =>{
    if(event){
      const {value} = event;
      setCredential({...credentials,zip:value});
    }else{
      setCredential({...credentials,zip:''});
    }
  };
  const saveAddress = () =>{  
    const regex = /(^(8801|01))[1|3-9]{1}(\d){8}$/;
    let phone = credentials.phone;
   // phone = phone.substr(1,phone.length);
    const valid = regex.test(phone);
    if(valid){
      axios.post(`${baseUrl}store-shippingaddress`,credentials)
      .then((res)=>{
        if(res.status === 202){
          setAddressError(res.data);
        }
        if(res.status === 200){
          setShowAdrees(false);
          setAddressError(null);
        }
      })
      .catch();
    }else{
      toast.error('Invalid phone number');
    } 
  };
  const showAddressView = () =>{
    return(
      <div className='new-address-form'>
        <div className='new-address-inputs'>
            <div>
              {addressError && errorList()}
            </div>
            <div>
              <Form.Group className="mb-1">
                <Form.Label className='font-weight-bold text-dark'>Name</Form.Label>
                <Form.Control type="text" name="name" value={credentials.name} onChange={credentialHandler} placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className='font-weight-bold text-dark'>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={credentials.phone} onChange={credentialHandler} placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className='font-weight-bold text-dark'>Address</Form.Label>
                <Row>
                  <Col className="mb-2" lg={6} md={6} xs={12}>
                    <Select
                    placeholder="select division"
                    isClearable={true}
                    isSearchable={true}
                    name="divison"
                    onChange={divisionHandler}
                    options={divisionList}
                    />
                  </Col>
                  <Col className="mb-2" lg={6} md={6} xs={12}>
                    <Select
                    placeholder="select city"
                    isClearable={true}
                    isSearchable={true}
                    name="city"
                    onChange={cityHandler}
                    options={cityList}
                    />
                  </Col>
                  <Col className="mb-2" lg={6} md={6} xs={12}>
                    <Select
                    placeholder="select thana"
                    isClearable={true}
                    isSearchable={true}
                    name="thana"
                    onChange={thanaHandler}
                    options={thanaList}
                    />
                  </Col>
                  <Col className="mb-2" lg={6} md={6} xs={12}>
                    <Select
                    placeholder="select postcode"
                    isClearable={true}
                    isSearchable={true}
                    name="zip"
                    onChange={zipHandler}
                    options={zipList}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" name="address" onChange={credentialHandler} placeholder="address" />
              </Form.Group>
            </div>
            <Button className='confirm-btn' size="sm" variant='none' onClick={saveAddress}>Save</Button>
          </div>
      </div>
    );
  };
  const addNewAddressHandler = () => setShowAdrees(!showAddress);
  const errorList = () => {
    const errMsgs = Object.values(addressError);
    return (
      <div className="p-1 rounded text-danger mb-2">
        {errMsgs.map((msg) => (
          <small key={Math.random()}>
            {msg}
            <br />
          </small>
        ))}
      </div>
    );
  };

  const selectedProduct = () =>{
    return selectedPro.map((cart)=>{
      return(
        <div key={cart.id} className="product-info mb-2">
          <div className='product-info-title font-weight-bold'>{cart.qty} x {cart.product.product_name}</div>
          <div className='product-info-price'>{cart.product.unit_price*cart.qty} Tk</div>
        </div>
      );
    });
  };
  const buyNow =() =>{
    const cart = state.cart;
    return(
      <div key={cart.id} className="product-info mb-2">
        <div className='product-info-title font-weight-bold'>{cart.qty} x {cart.product.product_name}</div>
        <div className='product-info-price'>{cart.product.unit_price*cart.qty} Tk</div>
      </div>
    );
  };
  const buyNowPrice = () =>{
    const{qty} = state.cart;
    const {unit_price} = state.cart.product;
    return unit_price*qty;
  };
  const agreementHandler = (event) =>{
    if(event.target.checked){
      setCredential({...credentials,agree:true});
    }else{
      setCredential({...credentials,agree:false});
    }
  };

  const confirmBtnHandler = () =>{
    if(address === null){
      toast.error('Choose shipping address!');
    }
    else if(!credentials.agree){
      toast.error('You must agree with all terms & conditions!');
    }else{
      let data = null;
      if(state.path === 'view-cart' ){
          data = selectedPro;
      }
      if(state.path === 'buy-now' ){
        data = [state.cart];
      }
      navigate('/payment',{state: {cart:data,address,userId,shipping:shippingRef.current.innerText}});
    }
  };

  const shippingModalShow = () => setshowshipping(true);
  const shippingModalClose = () => setshowshipping(false);

  return(
    <div className='container checkout-page'>
    <Row className="justify-content-center checkout-component">
      <Col className="p-1" md={7} sm={12}>
        <div className="checkoutInfo">
          <div className="address">
            <div className="font-weight-bold text-dark">My saved address</div>
            <div className="address-info">
              {addresses && addresses.map((address)=>{ return (
              <div key={address.id}>
                <Form.Check
                  key={address.id}
                  inline
                  label={address.address}
                  value={address.id}
                  type="radio"
                  name="existingaddress"
                  onClick={addresshandler}
                />
                <Button
                  variant="none"
                  size="sm"
                  onClick={()=>removeAddressHandler(address.id)} >
                    <ImBin />
                  </Button>
              </div>
              ); })}
            </div>
          </div>
          <div className="new-address">
            <div>
              <Button
                variant="none"
                size="sm"
                className="font-weight-bold text-dark"
                onClick={addNewAddressHandler}
              >
                <FaPlus /> Add new address
              </Button>
            </div>
            {showAddress && showAddressView()}
          </div>

          <div className="new-address" style={{ padding:'1rem' }}>
          <b>Delivery Time:</b>
          <li>
          <b>Domestic Purchases:</b> within Dhaka 3-5 working days; Outside Dhaka 5-7 working days.
          </li>
          <li>
          <b>International Purchases-</b> within Dhaka 20-25 working days; Outside Dhaka 25-30 working days.
          </li>
          </div>
        </div>
      </Col>
      <Col className='p-1' md={4} sm={12}>
          <div className='order-details'>
            <div className='font-weight-bold text-dark mb-2 hr'>Your Orders</div>
            <div className="checkout-products-list mb-3">
              {state && state.path === 'view-cart' && selectedProduct()}
              {state && state.path === 'buy-now' && buyNow()}
            </div>
            <div className='summary mb-2'>
              <div className='text-dark'><b>Summary</b></div>
              <div className='summary-items'>
                <span>Subtotal</span>
                <span>
                  {state && state.path === 'view-cart' && subtotal}
                  {state && state.path === 'buy-now' && buyNowPrice()}
                </span>
              </div>
              <div className='summary-items c-hr'>
                <span>Shipping<iconify-icon onClick={shippingModalShow} icon="ei:question" width="20"></iconify-icon></span>
                <span ref={shippingRef}>
                  {state && state.path === 'view-cart' && shipping(selectedPro,city,division)}
                  {state && state.path === 'buy-now' && buyshipping(state.cart,city,division)}
                </span>
              </div>
              <div className='summary-items font-weight-bold text-dark'>
                <span>Total</span>
                <span>
                  {state && state.path === 'view-cart' && subtotal+shipping(selectedPro,city,division)}
                  {state && state.path === 'buy-now' && buyNowPrice()+buyshipping(state.cart,city,division)}
                  &ensp; Tk
                </span>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="ckeck">
              <Form.Check type="checkbox" name="agreement" onChange={agreementHandler} />
              <label>I have read and agreed to the <Link className="clickableLink" to="/terms-and-condition">Terms&Condition</Link>, <Link className="clickableLink" to="/return-and-refund">Return&Refund Policy</Link> and <Link className="clickableLink" to="/privacy-policy">Privacy Policy</Link></label>
            </div> 
          </Form.Group>
            <div>
              <Button className='confirm-btn' variant='none' size="sm" onClick={confirmBtnHandler}>Procced to Payment</Button>
            </div>
          </div>
        </Col>
    </Row>
      {/* shipping information modal */}
      <Modal
      show={showshipping}
      onHide={shippingModalClose}
      backdrop="static"
      keyboard={false}
      >
      <Modal.Header closeButton>
      <Modal.Title>Shipping Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <b>Delivery Charge:</b><br/>
      <li>
      <b>Inside Dhaka:</b> 80Tk/kg, Over 1kg: 30tk/kg Will Be Added
      </li>
      <li>
      <b>Outside Dhaka:</b> 160Tk/kg, Over 1kg: 60tk/kg Will Be Added
      </li>

     
      <small className='text-danger'>*Separate Shipping Charges Will Incur For Oders Made From Multuiple Stores</small>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="none" onClick={shippingModalClose}>
      Got It
      </Button>
      </Modal.Footer>
      </Modal>
    </div>
  );
}