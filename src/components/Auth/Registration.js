import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Button, Col,Row,Form} from 'react-bootstrap';
import Spinner from 'react-bootstrap/esm/Spinner';
import {Link,useNavigate} from 'react-router-dom';
import Classes from './login.module.css';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../features/ProfileSlice';
import toast from 'react-hot-toast';
import logo from '../../assets/images/Hooloo.svg';
import ss from '../../assets/images/LOGSS3.png'
function Registration() {
  const dispatch = useDispatch();
  //registration credentials handler
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const [credentials,setCredentials] = useState({name:'',mobile:'',otp:'',password:'',password_confirmation:'',agree:false});
  const credentialsHandler = (event) =>{
    const {name,value} = event.target;
    setCredentials({ ...credentials, [name]: value });
  }
  const agreementHandler = (event) => {
    if(event.target.checked){
      setCredentials({ ...credentials, agree: true });
    }else{
      setCredentials({ ...credentials, agree: false });
    }
  }
  const [verifyLoader,setverifyLoader] = useState(false);
  const verification = () =>{
    const regex = /(^(8801|01))[1|3-9]{1}(\d){8}$/;
    const valid = regex.test(credentials.mobile);
    if(valid){
      setverifyLoader(true);
      axios.get(`https://shop.hoolo.live/api/verification/${credentials.mobile}`).then((res)=>{
        if(res.status !== 200){
          setMessage('Invalid phone number');
        }
        setverifyLoader(false);
      }).catch(()=>{
        setMessage('Somethings went wrong! try again');
        setverifyLoader(false);
      });
    }else{
      setMessage('Invalid phone number');
    }
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    setLoading(true);
    if(credentials.agree){
      axios
            .post('https://shop.hoolo.live/api/user-registration', credentials)
            .then((res) => {
                if (res.status === 201) {
                    setLoading(false);
                    dispatch(setProfile(res.data));
                    navigate('/', { replace: true });
                } else if (res.status === 500) {
                    setLoading(false);
                    setMessage(res.data);
                } else {
                    setLoading(false);
                    setMessage(null);
                    setErrors(res.data);
                }
            })
            .catch((err) => {
                setLoading(false);
                setErrors(null);
                setMessage(err.message);
            });
    }else{
      toast.error('You must click the checkbox');
      setLoading(false);
    }
  }
  // errors handleing
  const loading = () => (
      <div className="text-primary mb-2 text-center">
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          Processing...
      </div>
  );
  const errorMessage = () => (
      <div className="p-1 bg-info bg-opacity-10 rounded text-danger mb-2">
          <small>{message}</small>
      </div>
  );
  const errorList = () => {
      const errMsgs = Object.values(errors);
      return (
          <div className="p-1 bg-info bg-opacity-10 rounded text-danger mb-2">
              {errMsgs.map((msg) => (
                  <small key={Math.random()}>
                      {msg}
                      <br />
                  </small>
              ))}
          </div>
      );
  };
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);
  return (
    <div className='container'>
    <div className={Classes.loginForm}>
    
      <Row className="justify-content-center align-items-center">
        <Col className={Classes.ssCol} lg={2} md={12} sm={12}></Col>
        <Col className={Classes.ssCol} lg={4} md={6} sm={12}>

            <img className={Classes.ssImg} src={ss} alt="hoolo"/>

        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className='card login' style={{padding:'2rem 1rem'}}>
            <div className={Classes.logo}>
              <img src={logo} alt="hoolo"/>
            </div>
            {isLoading && loading()}
            {errors && errorList()}
            {message && errorMessage()}
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={credentialsHandler} value={credentials.name} type="text" name="name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Row>
                  <Col md={6}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={credentialsHandler} value={credentials.mobile} type="tel" name="mobile" placeholder="Enter your phone" />
                  </Col>
                  <Col md={6} className="mt-4">
                  {verifyLoader === true ? <Button variant="none" size="md"><Spinner animation="border" size="sm" /></Button> : <Button variant="none" size="md" className='font-weight-bold' onClick={verification}><small className='text-info'>Send OTP</small></Button>}
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Verification Code</Form.Label>
                <Form.Control onChange={credentialsHandler} value={credentials.otp} type="text" name="otp" placeholder="Enter verification code" />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={credentialsHandler} value={credentials.password} type="password" name="password" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onChange={credentialsHandler} value={credentials.password_confirmation} type="password" name="password_confirmation" placeholder="Enter your password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <div className="ckeck">
                <Form.Check type="checkbox" name="agreement" onChange={agreementHandler} />
                <label>I have read and agreed to the <Link className="clickableLink" to="/terms-and-condition">Terms&Condition</Link>, <Link className="clickableLink" to="/return-and-refund">Return&Refund Policy</Link> and <Link className="clickableLink" to="/privacy-policy">Privacy Policy</Link></label>
              </div> 
            </Form.Group>
              <div className="text-center">
                <Button variant="none" size="sm" type="submit" style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
                  Sign Up
                </Button>
              </div>
              </Form>
          </div>
          <div className='card'  style={{padding:'1rem'}}>
            <p style={{margin: '0px'}}>Already have an account <Link to="/login" style={{color:"blue"}}>Sign in</Link></p>
          </div>
        </Col>
        <Col className={Classes.ssCol} lg={2} md={12} sm={12}></Col>
      </Row>
    </div>
  </div>
  )
}

export default Registration;