import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Button,Container,Form,Row,Col,Alert} from 'react-bootstrap';
import Classes from './login.module.css';
import logo from '../../assets/images/hoolo.svg';
import toast from 'react-hot-toast';
import axios from 'axios';
function Verification() {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(()=>{
		if(location.state === null){
			navigate('/forget-password',{replace:true});
		}
	},[location.state]);
	const [errors,setErrors] = useState(null);
	const initial = {password:'',confirm_password:'',otp:''};
	const [credentials,setCredentials] = useState(initial);
	const credentialHandler = (event) =>{
		const {name,value} = event.target;
		setCredentials({...credentials,[name]:value});
	}
	const submitHandler = (event) =>{
		event.preventDefault();
		if(credentials.password !== '' && credentials.confirm_password !== '' && credentials.password === credentials.confirm_password){
			axios.post('https://shop.hoolo.live/api/password-reset/update',{email:location.state.email,password:credentials.password,otp:credentials.otp})
			.then((res)=>{
				if(res.status === 202){
					setErrors(res.data);
				}else if(res.status === 200){
					navigate('/login',{replace:true});
					toast.success('Password reset successfully');
				}else{
					toast.error('Something went wrong! Try again');
				}
			})
			.catch(()=>{
				toast.error('Something went wrong! Try again');
			})
		}else{
			toast.error('Password is mismatched');
		}
	}
	return (
		<Container className={Classes.loginForm}>
			<Row className="justify-content-center">
				<Col md={4}>
					<div className={Classes.logo}>
						<img src={logo} alt="hoolo"/>
					</div>
					<Form className="mt-3">
						<Form.Group className="mb-3">
							<Form.Label>Verification Code</Form.Label>
							{
								errors && errors.hasOwnProperty('otp') && (
								  <Alert variant="danger">
									{errors.otp}
								  </Alert>
								)
							  }
							<Form.Control type="text" name="otp" value={credentials.otp} onChange={credentialHandler} placeholder="Enter verification code" />
						</Form.Group>
			
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							{
								errors && errors.hasOwnProperty('password') && (
								  <Alert variant="danger">
									{errors.password}
								  </Alert>
								)
							  }
							<Form.Control type="password" name="password" value={credentials.password} onChange={credentialHandler} placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="confirm_password" value={credentials.confirm_password} onChange={credentialHandler} placeholder="Confirm Password" />
						</Form.Group>
						<Button variant="primary" onClick={submitHandler}>
							Reset Password
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
export default Verification;
