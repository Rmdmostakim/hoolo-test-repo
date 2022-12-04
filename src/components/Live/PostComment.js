import React, { Component  } from 'react';
import './Sidebar.css'
import { withRouter } from "react-router-dom";
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import './Footer.css';
import "../Navigation/Navigation.css";
import Button from "react-bootstrap/Button";
// import swal from 'sweetalert'

export class PostComment extends Component {
    state={
        user_id:101,
        user:'',
        video_id:this.props.id,
        status:1,
        email:'',
        comment:''
        
      }
     
      onChangeHandler=(e)=>{
        this.setState({
              [e.target.name]:e.target.value
           })
         
        }
        handleSubmit=(e)=>{
          e.preventDefault();
      
        
          
       
     
    
    
        axios.post('https://shop.hoolo.live/api/videocomment',this.state)
                .then(res=>{
                  if(res.data.status == 200){
                            
                    // swal('Success', 'Comment has been post Successfully', 'success')
                  
                  }
                  
            })
            .catch(error=>{
              console.log(error)
      
            })
        e.target.reset();
       this.setState({
        user_id:101,
        user:'',
        video_id:this.props.id,
        status:1,
        email:'',
        comment:''
       })
      
        }
        
      render() {
       
        return (
          <div >
            <div className="card blog">
                    <div className="card-body">
            
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col lg={6} md={6}>
                                    <Form.Group controlId="comment-author-name">
                                        <Form.Label>
                                            Your Name
                                            <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control type="text" name="user"   value={localStorage.getItem('name')} onChange={this.onChangeHandler}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6}>
                                    <Form.Group controlId="comment-author-email">
                                        <Form.Label>
                                            Your Email
                                            <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder=""
                                        name='email'
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                                        />
                                    </Form.Group>
                                </Col>
                  <Col lg={12} md={6}>
    
                            <Form.Group controlId="comment-author-email">
                                <Form.Label>
                                    Review <span className="text-danger">*</span>
                                </Form.Label>
    
                                <Form.Control   
                   onChange={this.onChangeHandler}  
                   type="text" 
                    name="comment" 
                    value={this.state.comment}
                   />
                            </Form.Group>
                </Col>
                </Row>
                            <Button variant="success"  type="submit">Post Comment</Button>
                        </Form>
                    </div>
                </div>
          </div>
        )
      }
    }
    

export default PostComment;


