import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Button, Col,Row,Form} from 'react-bootstrap';
import Spinner from 'react-bootstrap/esm/Spinner';
import { useDispatch } from 'react-redux';
import {Link,useLocation,useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import {google,socialLogin} from '../../config/firebase-config';
import { setProfile } from '../../features/ProfileSlice';
import { getCart } from "../../features/CartSlice";
import gmail from './gmail.png';
import Classes from './login.module.css';
import logo from '../../assets/images/Hooloo.svg';
import ss from '../../assets/images/LOGSS3.png'
function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  //login credentials handler
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const [credentials,setCredentials] = useState({phone:'',password:''});
  const credentialsHandler = (event) =>{
    const {name,value} = event.target;
    setCredentials({ ...credentials, [name]: value });
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    setLoading(true);
    axios.post('https://shop.hoolo.live/api/react/login',credentials)
    .then((res)=>{
      if (res.status === 202) {
        setLoading(false);
        dispatch(setProfile(res.data));
        dispatch(getCart());
        navigate(-1, { replace: true });
    } else if (res.status === 201) {
        setLoading(false);
        setErrors(null);
        setMessage(res.data);
    } else {
        setLoading(false);
        setMessage(null);
        setErrors(res.data);
    }
    })
    .catch((error)=>{
        setLoading(false);
        setErrors(null);
        setMessage(error.message);
    });
  }
  // socila login
  const socialLoginHandler = async () => {
      setLoading(true);
      const result = await socialLogin(google);
      if(result){
        const name = result.user.displayName;
        const email = result.user.email;
        const phone = result.user.phoneNumber;
        const photo = result.user.photoURL;
        const uid = result.user.uid;
        axios.post('https://shop.hoolo.live/api/react/socialLogin',{name,email,mobile:phone,image:photo,password:uid})
        .then((res)=>{
          if (res.status === 202) {
              setLoading(false);
              dispatch(setProfile(res.data));
              dispatch(getCart());
              navigate('/', { replace: true });
          }else {
              setLoading(false);
              setMessage(null);
              setErrors(res.data);
          }
        })
        .catch((error)=>{
            setLoading(false);
            setErrors(null);
            setMessage(error.message);
        });
      }else{
        setLoading(false);
        setMessage(null);
        setErrors(null);
        toast.error('Something went wrong! Try again');
      }
  };
  // errors handleing
  const loading = () => (
      <div className="text-primary mb-2 text-center">
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          Processing...
      </div>
  );
  const errorMessage = () => (
      <div className="p-1 bg-info bg-opacity-10 rounded text-danger mb-2">
          <small className="text-capitalize">{message}</small>
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
  });
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
                <Form.Group className="mb-1">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control onChange={credentialsHandler} value={credentials.phone} type="text" name="phone" placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={credentialsHandler} value={credentials.password} type="password" name="password" placeholder="Enter your password" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="none" size="sm" type="submit" style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
                    Login
                  </Button>
                </div>
              </Form>
              <div>
                <Button
                      variant="none"
                      size="sm"
                      onClick={socialLoginHandler}
                  >
                  <img className={Classes.socialIcon} src={gmail}  alt="hoolo" /> <small>Login with Google</small>
                  </Button>
              </div>
              <div>
                <p style={{margin: '0px'}}>Forget password? <Link to="/forget-password" style={{color:"blue"}}>Click Here</Link> </p>
              </div>
            </div>
            <div className='card'  style={{padding:'1rem'}}>
              <p style={{margin: '0px'}}>Do not have account? <Link to="/registration" style={{color:"blue"}}>Sign Up</Link></p>
            </div>
          </Col>
          <Col className={Classes.ssCol} lg={2} md={12} sm={12}></Col>
        </Row>
      </div>
    </div>
  )
}

export default Login;