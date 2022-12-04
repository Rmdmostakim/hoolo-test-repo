import React, { Component } from 'react'
import { Link,} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import swal from 'sweetalert'
import { withRouter } from 'react-router-dom'
import Carousel from "./Carousel";
import Container from "react-bootstrap/Container";


class Signup extends Component {

    state={
        name:'',
        email:'',
		mobile:'',
		phonecode:'880',
		eula:1,
        password:'',
        password_confirmation:'',
		isSubmit:false,
		error:false, 
    }
    onChangeHandler=(e)=>{
    this.setState({
          [e.target.name]:e.target.value
       })
     
    }
	handleSubmit=(e)=>{
		e.preventDefault();

	  axios.post('https://shop.hoolo.live/api/react/register',this.state)
          .then(res=>{
			  if(res.data.status == 200){
				   
				  swal('Welcome To Hoolo', 'Registration Successful, Now you can Login', 'success');
				  this.props.history.push('/auth/login')
			  }
			  else{
				swal('Registration', 'Registration Not Successful, Please Register again', 'success');
			 
			  }
		 
		  })
		  .catch(error=>{
			  console.log(error)

		  })
	 

	 

	}
    render() {
       const {name,email,mobile,password,password_confirmation} =this.state
 
        return (
            <>
			 <section className="login-main-wrapper">
        <Container fluid className="pl-0 pr-0">
        <Row noGutters>
            
			<Col md={6} className=" p-5 bg-white full-height">
				<div className="login-main-left ">
					<div className="text-center mb-5 login-main-left-header  ">
						<img
							src="/img/logo.png"
							className="img-fluid"
							alt="hulusthul"
						/>
						{/* <h5 className="mt-3 mb-3">Welcome to Hulusthul</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p> */}
					</div>
					<Form className=""  onSubmit={this.handleSubmit} >
                    <Form.Group>
							<Form.Label>Full Name  <strong style={{color:'red'}}>*</strong></Form.Label>
							<Form.Control
                                name='name'
                                value={name}
								type="text"
								placeholder="Enter your full name"
                                onChange={this.onChangeHandler}
                                required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>E-mail  <strong style={{color:'red'}}>*</strong></Form.Label>
							<Form.Control
                               name='email'
							   value={email}
							   type="email"
								placeholder="Enter your email"
                                onChange={this.onChangeHandler}
                                required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Phone  <strong style={{color:'red'}}>*</strong></Form.Label>
							<div style={{display:'flex'}}>
							<Form.Control
							    value='+880'
                                disabled
								className='w-25'
							/>
							<Form.Control
                               name='mobile'
							   value={mobile}
							   type="text"
								placeholder="Enter your mobile number"
                                onChange={this.onChangeHandler}
                                required
							/>
							</div>
							
						</Form.Group>

						<Form.Group>
							<Form.Label>Password  <strong style={{color:'red'}}>*</strong></Form.Label>
							<Form.Control
                                name='password'
								value={password}
								type="password"
								placeholder="Enter  Password"
                                onChange={this.onChangeHandler}
                                required
							/>
							 
						</Form.Group>
						<Form.Group>
							<Form.Label>Confirm Password  <strong style={{color:'red'}}>*</strong></Form.Label>
							<Form.Control 
                             name='password_confirmation'
							 value={password_confirmation}
                             type="password"
                             placeholder="Enter confirm password"
                             onChange={this.onChangeHandler}

                             required 
                             />
							 <span>{
						   this.state.password===this.state.password_confirmation? (<p   style={{color:'green'}}>match</p>):(<p    style={{color:'red'}}>not match</p>)
					   }</span>
						</Form.Group>
                       
						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
                                        type="submit"
										size="lg"
										block
                                         
									>
										Sign Up
									</Button>
								</Col>
							</Row>
						</div>
						 
					</Form>
    
					<div className="text-center mt-2 ">
						<p className="light-gray">
							Already have an account?{" "}
							<Link to="/auth/login" style={{color:"blue"}}>Log In</Link>
						</p>
					</div>
				</div>
			</Col>
			<Carousel />
          </Row>
        </Container>
        </section>
		</>
        )
    }
}

export default Signup;