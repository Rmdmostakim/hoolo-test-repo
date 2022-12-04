import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container,Button,Form,Col,Row,Alert } from "react-bootstrap";
import hoolo from '../../assets/images/hoolo.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

function ForgetPassword() {
	const navigate = useNavigate();
	const [error,setError] = useState(false);
	const [email,setEmail] = useState('');
	const emailHandler = (event) =>{
		const {value} = event.target;
		setEmail(value);
	}
	const submitHandler = () =>{
		if(email.trim().length>10){
			axios.post('https://shop.hoolo.live/api/password-reset/request',{email:email})
			.then((res)=>{
				if(res.status === 202){
					setError(true);
				}else{
					navigate('/reset-password',{replace:false,state:{email:email}});
					toast.success('An email send with verification code');
				}
			})
			.catch(()=>{
				toast.error('Something went wrong! Try again');
			});
		}else{
			setError(true);
		}
	}
	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={5} className=" p-5 bg-white full-height">
					<div className="login-main-left">
						<div className="text-center mb-5 login-main-left-header">
							<img
								src={hoolo}
								className="img-fluid"
								alt="LOGO"
								style={{ width:'200px' }}
							/>
						</div>
						<div>
							<Form.Group>
								<Form.Label>Enter Email</Form.Label>
								{error && (
									<Alert variant="danger">
										Invalid Email
									</Alert>
								)}
								<Form.Control
									type="text"
									placeholder="Enter email"
									value={email}
									onChange={emailHandler}
								/>
							</Form.Group>
							<div className="mt-4">
								<Row>
									<Col>
										<Button
											variant="outline-success text-dark"
											size="lg"
											block
											onClick={submitHandler}
										>
											Reset Password
										</Button>
									</Col>
								</Row>
							</div>
						</div>

						<div className="text-center mt-2">
							<p className="light-gray">
								Don't have an account?{" "}
								<Link to="/registration">Sign up</Link>
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ForgetPassword;
