import React, { useState } from "react";
import "./MyAccount.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Col, Row, Table,Alert } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import axios from "axios";
import { useEffect } from "react";
import Dropdown from "./Dropdown";
import AccountNav from './AccountNav';
import { Link,Navigate } from "react-router-dom";
import golive from './icon/golive.svg'
import refund from './icon/refund.svg'
import order from './icon/order.svg'
import like from './icon/like.svg'
import follow from './icon/follow.svg'
import details from './icon/details.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProfile,getProfile } from '../../features/ProfileSlice';
import './MyAccount.css';
import '../../assets/css/newmyaccount.css';
import edit from './icon/edit.svg'
import {Modal} from 'react-bootstrap';
import storeLogo from '../../assets/images/store.png';
import toast from 'react-hot-toast';
const MyAccount=()=> {
  const {id,name,mobile,address,avatar,social} = useSelector((state)=>state.profile);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const baseUrl = 'https://shop.hoolo.live/api/';
  const [userInfo,setUserInfo] = useState(null);
  const [likes,setLikes] = useState(null);
  const [follows,setFollows] = useState(null);
  const [orders,setOrders] = useState(null);
  const[refundList,setRefundList] = useState(null);
  const [show,setShow] = useState(false);
  const handleShow = () =>{
    setShow(true);
    setCredentials(initial);
  }
  const handleClose = () =>setShow(false);
  const initial = {id,name,mobile,image:null,address};
  const [credentials,setCredentials] = useState(initial);
  const credentialHandler = (event) =>{
    const {name,value} = event.target;
    if(name === 'image'){
      setCredentials({ ...credentials, [name]: event.target.files[0] }); 
    }else{
      setCredentials({...credentials,[name]:value});
    }

    
  }
  const updateHandler = () =>{
    const bodyFormData = new FormData();
    bodyFormData.append('id', credentials.id);
    bodyFormData.append('name', credentials.name);
    bodyFormData.append('mobile', credentials.mobile);
    bodyFormData.append('address', credentials.address);
    bodyFormData.append('image', credentials.image);
    axios.post('https://shop.hoolo.live/api/users/update',bodyFormData)
    .then((res)=>{
      if(res.status === 200){
        setShow(false);
        dispatch(setProfile(res.data));
        toast.error('Profile update success');
      }
    })
    .catch(()=>{
      toast.error('Profile update failed');
    });
  }

  useEffect(()=>{
    if(userId){
      axios
      .get(`${baseUrl}users/profile/${userId}`)
      .then((res) => {
        setUserInfo(res.data.UserInfo[0]);
      });
    }
  });
  
  useEffect(()=>{
    dispatch(getProfile());
  },[dispatch]);

  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);
  
  const likeBtn = () =>{
    axios
    .get(`${baseUrl}users/likes/${userId}`)
    .then((res) => {
      setLikes(res.data.Likes);
    });
  };
  const followBtn = () =>{
    axios
    .get(`${baseUrl}users/follows/${userId}`)
    .then((res) => {
      setFollows(res.data);
    });
  };

  const orderBtn = () =>{
    axios
    .get(`${baseUrl}orders-by/${userId}`)
    .then((res) => {
      if(res.status === 200){
        setOrders(res.data);
      }
    });
  }
  const refundBtn = () => {
    axios.get(`${baseUrl}refunds/${userId}`)
    .then((res)=>{
      setRefundList(res.data)
    })
    .catch(()=>{
      setRefundList(null)
    });
  }
  const [refundErrors,setRefundError]= useState(null);
  const [refundcredentials,setRefundcredentials] = useState({user_id:userId,order_code:'',reason:'',account_number:'',attachment: null});
  const [showRefund,setShowRefund] = useState(false);
  const handleShowRefund = () =>{
    setShowRefund(true);
    setRefundError(null);
  }
  const handleCloseRefund = () =>{
    setShowRefund(false);
    setRefundcredentials({user_id:userId,order_code:'',reason:'',account_number:'',attachment: null});
  }
  const refundHandler = (event) =>{
    const {name,value} = event.target;
    setRefundcredentials({...refundcredentials,[name]:value});
  }
  const attachmentHandler = (event) =>{
    const {name} = event.target;
    setRefundcredentials({ ...refundcredentials, [name]: event.target.files });
  }
  const refundSubmit = () =>{
    if(refundcredentials.attachment === null || refundcredentials.reason === '' || refundcredentials.order_code === '' || refundcredentials.account_number === ''){
      toast.error('Please fill up all input fields');
    }else{
      const bodyFormData = new FormData();
      bodyFormData.append('user_id', refundcredentials.user_id);
      bodyFormData.append('order_code', refundcredentials.order_code);
      bodyFormData.append('reason', refundcredentials.reason);
      bodyFormData.append('account_number', refundcredentials.account_number);
      for(var i=0; i<refundcredentials.attachment.length;i++){
        bodyFormData.append('attachment[]', refundcredentials.attachment[i]);
      }
      axios.post('https://shop.hoolo.live/api/create-refunds',bodyFormData)
      .then((res)=>{
        console.log(res.data);
        if(res.status === 201){
          toast.success('Refund request created successfully');
          setRefundcredentials({user_id:userId,order_code:'',reason:'',account_number:'',attachment: null});
          setRefundError(null);
          handleCloseRefund();
        }
        if(res.status === 202){
          setRefundError(res.data);
        }
      })
      .catch(()=>{
        toast.error('Failed to create refund request');
      });
    }
  }
  const cancelOrder = (order) =>{
    const data = {
      user_id:userId,
      order_code:order,
    }
    axios.post('https://shop.hoolo.live/api/cancel-order',data)
    .then((res)=>{
      if(res.status === 400){
        toast.error('Invalid order code');
      }
      if(res.status === 200){
        toast.error(res.data);
      }
      if(res.status === 201){
        toast.success('Order canceled successfully');
      }
    })
    .catch();
  }

 if(userId){
    return (
      <div>
        <div className="container">
            <ContentWrapper className="single-channel-page">
            <AccountNav/>
            </ContentWrapper>
            <ContentWrapper >
              <Container fluid className="drop">
                <Row>
                  <Col md={12}  className="mb-2">
                    <Dropdown title="Go Live" Icon={<img src={golive} alt="golive"/>} dataHandler={null}>
                      <h6><Link to="/streaming">Start live streaming</Link></h6>
                    </Dropdown>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Dropdown title="Order History" Icon={<img src={order} alt="order"/>} dataHandler={orderBtn}>
                        <div>
                          {orders ? (
                            <div className="profilefixdiv">
                              {orders.map((order, index) => (
                                  <div className="card perCard mt-2 mb-3" key={order.id}>
                                    <Row className="align-items-center" style={{width:'100%'}}>
                                      <Col md={3} sm={12}>
                                        <b>Order Code:</b><p>{order.order_code}</p>
                                      </Col>
                                      <Col md={3} sm={12}>
                                        <b>Order Status:</b>{order.status === 0 ?<p style={{ color:'blue'}}>processing</p> : order.status === 1 ? <p style={{ color:'green'}}>Confirmed</p>: <p style={{ color:'red'}}>Cnacelled</p>}
                                      </Col>
                                      <Col md={3} sm={12}>
                                          <b>Placed at:</b><p>{order.created_at}</p>
                                      </Col>
                                      <Col md={3} sm={12}>
                                        <Link to={'/'} className="btn btn-sm btn-primary" style={{margin:'2px'}}>Details</Link>
                                        <Link to={`/order/${order.order_code}`} className="btn btn-sm btn-success" style={{margin:'2px'}}>Invoice</Link>
                                        {new Date().setDate(new Date().getDate()) <= new Date(order.created_at).setDate(new Date(order.created_at).getDate()+1) && order.status !==2   && (<span><Button onClick={()=>cancelOrder(order.order_code)} variant="danger" className="btn btn-sm">Cancel</Button></span>)}
                                      </Col>
                                    </Row>
                                  </div>
                                ))}

                            </div>
                          ):
                          'No data to show'
                          }
                        </div>
                    </Dropdown>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Dropdown title="Refund History" Icon={<img src={refund} alt="refund"/>} dataHandler={refundBtn}>
                      
                      {refundList ?
                        (
                          <div className="profilefixdiv">
                          {
                            refundList.map((data)=>(
                              <div className="card perCard mt-2 mb-3" key={data.id}>
                                <Row className="align-items-center">
                                  <Col md={4} sm={12}>
                                  <b>Order Code:<br/></b><p>{data.order_code}</p> 
                                  </Col>
                                  <Col md={4} sm={12}>
                                  <b>Refund Status:<br/></b>{data.status === 0 ?<p style={{ color:'blue'}}>processing</p> : data.status === 1 ?<p style={{ color:'green'}}>Refunded</p> : <p style={{ color:'red'}}>Rejected</p>}
                                  </Col>
                                  <Col md={4} sm={12}>
                                  <b>Requested at:<br/></b> <p>{data.created_at}</p>
                                  </Col>
                                </Row>
                              </div>
                            ))}
                          
                          </div>

                        ) :
                        'No data to show'
                      }
                      <div  style={{ paddingInline:'5px'}} className='btnRefund'>
                        <div><iconify-icon icon="ant-design:plus-square-outlined" width="19" height="16"></iconify-icon></div>
                        <div><Button style={{paddingInline:'0px'}} variant='none' onClick={handleShowRefund}>Create Refund Request</Button></div> 
                      </div>
                    </Dropdown>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Dropdown title="Liked Videos" Icon={<img src={like} alt="like"/>} dataHandler={likeBtn}>
                        <div>
                          {
                            likes ? (
                              <div className="profilefixdiv">
                                {
                                  likes.map((data)=>(
                                    <div className="profileitem" key={data.id}>
                                      <div className="lf_img">
                                        <Link to={`/videos/${data.video.slug}`}><img style={{ width: '80px',height:'85px',borderRadius:'50%' }} src={data.video.thumbnail} alt={data.video.title}/></Link>
                                      </div>
                                      <div className="l_dateinfo" style={{padding:'5px'}}>
                                        <div className="lf_info">
                                          <Link to={`/videos/${data.video.slug}`}><b>{data.video.title}</b></Link><br/>
                                          By<Link style={{color:"blue", fontWeight:400}} to={`/vendors/videos/${data.video.store.uuid}`}> {data.video.store.name}</Link>
                                          
                                        </div>
                                        <div className="lf_date">
                                          {data.created_at}
                                        </div>
                                      </div>

                                    </div>
                                  ))
                                }                     
                              </div>

                            ) : 
                            'No data to show'
                          }
                        </div>
                    </Dropdown>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Dropdown title="Following Stores" Icon={<img src={follow} alt="follow"/>} dataHandler={followBtn}>
                      <div>
                        {follows ? (
                          <div className="profilefixdiv">
                          {
                            follows.map((data)=>(
                              <div className="profileitem" key={data.id}>
                                <div className="lf_img"> 
                                  <Link to={`/vendors/videos/${data.store_uuid}`}>
                                  {data.store_logo == null ? (
                                    <img style={{ width: '80px',height:'85px',borderRadius:'50%' }} className="store_logo" src={storeLogo} alt="store" />
                                  ):(
                                    <img style={{ width: '80px',height:'85px',borderRadius:'50%' }} src={data.store_logo} alt={data.store_name}/>
                                  )}
                                  
                                  </Link>
                                </div>
                                <div className="f_dateinfo" style={{padding:'5px'}}>
                                  <div className="lf_info">
                                    <Link to={`/vendors/videos/${data.store_uuid}`}><b>{data.store_name}</b></Link>  
                                  </div>
                                  <div className="lf_date">
                                    {data.created_at}
                                  </div>
                                </div>
                              </div>
                            ))
                          }                     
                        </div>
                        ) : 'No data to show'}
                      </div>
                    </Dropdown>
                  </Col>
                  <Col md={12} className="mb-2">
                    <Dropdown title="Account Details" Icon={<img src={details} alt="details"/>} dataHandler={()=>null} >
                      <div>
                      <p><span style={{ fontWeight:'bold' }}>Name:</span> {userInfo && userInfo.name }</p>
                      <p><span style={{ fontWeight:'bold' }}>Email:</span> {userInfo && userInfo.email}</p>
                      <p><span style={{ fontWeight:'bold' }}>Mobile:</span> {userInfo && userInfo.mobile && userInfo.mobile}</p>
                      <p><span style={{ fontWeight:'bold' }}>Address:</span> {userInfo && userInfo.address && userInfo.address}</p>
                      </div>
                      <div className='editprofile'>
                        <div><iconify-icon icon="ep:edit" width="19"></iconify-icon></div>
                        <div><Button style={{paddingInline:'0px'}} variant='none' onClick={handleShow}>Edit Profile</Button></div>
                      </div>
                    </Dropdown>
                  </Col>
                </Row>
              </Container>
      
            </ContentWrapper>
        </div>
        


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><small>Update Profile</small></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form encType="multipart/form-data">
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="name" value={credentials.name} onChange={credentialHandler} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="tel" placeholder="Enter mobile number" value={credentials.mobile} name="mobile" onChange={credentialHandler}/>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" value={credentials.address} name="address" onChange={credentialHandler}/>
                </Form.Group>
                {social === null && (
                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control type="file" name="image" size="sm" onChange={credentialHandler} />
                  </Form.Group>
                )}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="none" style={{backgroundColor:'#ffce2c', borderRadius:'5px'}} onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="none" style={{backgroundColor:'#ffce2c', borderRadius:'5px'}} onClick={updateHandler}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showRefund} onHide={handleCloseRefund}>
            <Modal.Header closeButton>
              <Modal.Title><small>Request Refund</small></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {
                  refundErrors && refundErrors.hasOwnProperty('exists') && (
                    <Alert variant="danger">
                      {refundErrors.exists}
                    </Alert>
                  )
                }
                <Form.Group>
                  <Form.Label className="text-black font-Normal">Order Code</Form.Label>
                  {
                    refundErrors && refundErrors.hasOwnProperty('order_code') && (
                      <Alert variant="danger">
                        {refundErrors.order_code}
                      </Alert>
                    )
                  }
                  <Form.Control
                    type="text"
                    placeholder="Order Code"
                    required
                    name="order_code"
                    value={refundcredentials.order_code}
                    onChange={refundHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cancellation Reason</Form.Label>
                  {
                    refundErrors && refundErrors.hasOwnProperty('reason') && (
                      <Alert variant="danger">
                        {refundErrors.reason}
                      </Alert>
                    )
                  }
                  <Form.Control
                    type="textarea"
                    placeholder="write Cancellation Reason"
                    required
                    name="reason"
                    value={refundcredentials.reason}
                    onChange={refundHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-black font-Normal">Phone Number</Form.Label>
                  {
                    refundErrors && refundErrors.hasOwnProperty('account_number') && (
                      <Alert variant="danger">
                        {refundErrors.account_number}
                      </Alert>
                    )
                  }
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    required
                    name="account_number"
                    value={refundcredentials.account_number}
                    onChange={refundHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Pictures or videos to validate refund request</Form.Label>
                  {
                    refundErrors && refundErrors.hasOwnProperty('attachment') && (
                      <Alert variant="danger">
                        {refundErrors.attachment}
                      </Alert>
                    )
                  }
                  <input  multiple name="attachment" onChange={attachmentHandler} className="form-control form-control-lg" type="file"></input>
                </Form.Group> 
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="none" style={{backgroundColor:'#ffce2c', borderRadius:'5px'}} onClick={handleCloseRefund}>
                Cancel
              </Button>
              <Button variant="none" style={{backgroundColor:'#ffce2c', borderRadius:'5px'}} onClick={refundSubmit}>
                Request Refund
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
  return <Navigate to="/login"/>
  
}

export default MyAccount;