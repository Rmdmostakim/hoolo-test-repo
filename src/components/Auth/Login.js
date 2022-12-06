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
import ss from '../../assets/images/LOGSS3.png';
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  //login credentials handler
  const baseUrl = 'https://shop.hoolo.live/api/';
  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({phone:'',password:'',username:'',otp:''});
  const credentialsHandler = (event) =>{
    const {name,value} = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  // socila login
  const socialLoginHandler = async () => {
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
              dispatch(setProfile(res.data));
              dispatch(getCart());
              navigate('/', { replace: true });
          }else {
            toast.error('Something went wrong! Try again');
          }
        })
        .catch((error)=>{
          toast.error('Something went wrong! Try again');
        });
      }else{
        toast.error('Something went wrong! Try again');
      }
  };

  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  });

  const [issetPhone,setPhone] = useState(false);
  const [issetOtp,setOtp] = useState(false);
  const [issetUsername,setUsername] = useState(false);
  const [issetPassword,setPassword] = useState(false);
  const [isphoneExists,setPhoneExist] = useState(false);

  const nextToPhone = () =>{
    let phone = credentials.phone;
    const dialCode = phone.includes('+');
    if(dialCode){
      phone = phone.substr(1,phone.length);
    }
    const regex = /(^(8801|01))[1|3-9]{1}(\d){8}$/;
    const valid = regex.test(phone);
    if(valid){
      axios.post(`${baseUrl}phone/exists`,{phone:credentials.phone})
      .then((res)=>{
        const {status} = res;
        if(status === 200){
          setPhoneExist(true);
          setPhone(true);
        }else{
          setPhoneExist(false);
          setPhone(true);
        }
      })
      .catch((error)=>{
        toast.error('Something went wrong! Try again');
      });
    }else{
      toast.error('Invalid phone number');
      setPhone(false);
    }
  }
  const nextToOtp = () =>{
    const otp = credentials.otp;
    if(otp.trim().length>3){
      axios.post(`${baseUrl}otp/verify`,{phone:credentials.phone,otp:otp})
      .then((res)=>{
        const {status} = res;
        if(status === 202){
          setOtp(true);
        }else{
          setOtp(false);
          toast.error('Invalid OTP');
        }
      })
      .catch(()=>{
        toast.error('Something went wrong! Try again');
      });
    }else{
      toast.error('Invalid OTP');
    }
  }

  const comfirmHandler = () =>{
    if(credentials.password.trim().length>5){
      if(isphoneExists){
        const loginCredentials = {
          phone:credentials.phone,
          password: credentials.password,
        }
        axios.post('https://shop.hoolo.live/api/react/login',loginCredentials)
        .then((res)=>{
          if (res.status === 202) {
              dispatch(setProfile(res.data));
              dispatch(getCart());
              navigate(-1, { replace: true });
          } else{
            toast.error('Wrong password.Enter valid password');
          }
        })
        .catch((error)=>{
          toast.error('Something went wrong please try again later');
        });
      }else{
        const regCredentials = {
          phone:credentials.phone,
          password: credentials.password,
          username: credentials.username,
        }
      }
    }else{
      toast.error('Password must be greater than 5 characters');
    }
  }

  const phoneView = () =>{
    return (
      <div>
        <Form.Group className="mb-1">
          <Form.Label>PHONE</Form.Label>
          <Form.Control onChange={credentialsHandler} value={credentials.phone} type="text" name="phone" placeholder="Enter your phone number" />
          <small>You may recieve SMS notifications from us for security and login purposes</small>
        </Form.Group>
        <div className="text-center">
          <Button variant="none" size="sm" onClick={nextToPhone} style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
            Next <AiOutlineRight/>
          </Button>
        </div>
      </div>
    );
  };

  const otpView = () =>{
    return (
      <div>
        <Form.Group className="mb-1">
          <Form.Label>OTP</Form.Label>
          <Form.Control onChange={credentialsHandler} value={credentials.otp} type="text" name="otp" placeholder="Enter your otp" />
        </Form.Group>
        <div className="text-center">
          <Button variant="none" size="sm" onClick={nextToOtp} style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
            Next <AiOutlineRight/>
          </Button>
        </div>
        <div className='d-flex justify-content-between'>
          <Button variant="warning" size="sm"><b><AiOutlineLeft/>Change Number</b></Button>
          <Button variant="warning" size="sm"><b>Resend OTP<AiOutlineRight/></b></Button>
        </div>
      </div>
    );
  };

  const usernameView = () =>{
    return (
      <div>
        <Form.Group className="mb-1">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control onChange={credentialsHandler} value={credentials.username} type="text" name="username" placeholder="Enter username" />
        </Form.Group>
        <div className="text-center">
          <Button variant="none" size="sm" style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
            Next <AiOutlineRight/>
          </Button>
        </div>
      </div>
    );
  };

  const passwordView = () =>{
    return (
      <div>
        <Form.Group className="mb-1">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control onChange={credentialsHandler} value={credentials.password} type="password" name="password" placeholder="Enter password" />
        </Form.Group>
        <div className="text-center">
          <Button variant="none" size="sm" onClick={comfirmHandler} style={{width:'100%',backgroundColor:'#1C405D',color:'white',borderRadius:'2px', margin:'1rem 0rem', padding:'5px'}}>
            Confirm
          </Button>
        </div>
        {isphoneExists && (
          <div>
            <p style={{margin: '0px'}}>Forget password? <Link to="/forget-password" style={{color:"blue"}}>Click Here</Link> </p>
          </div>
        )}
      </div>
    );
  };


  return (
    <div className='container'>
      <div className={Classes.loginForm}>
      
        <Row className="justify-content-center align-items-center">
          <Col className={Classes.ssCol} lg={4} md={6} sm={12}>
              <img className={Classes.ssImg} src={ss} alt="hoolo"/>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='card login' style={{padding:'2rem 1rem'}}>
              <Form>
                {!issetPhone && phoneView()}
                {issetPhone && !isphoneExists && !issetOtp &&otpView()}
                {issetOtp && usernameView()}
                {issetUsername || isphoneExists && passwordView()}
              </Form>
            </div>
            <div className='card'>
              <Button variant="none" size="sm" onClick={socialLoginHandler}>
                <img className={Classes.socialIcon} src={gmail}  alt="hoolo" /> <small>Login with Google</small>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;