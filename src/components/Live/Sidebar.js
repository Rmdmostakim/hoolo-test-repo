import React, { useState, Component  } from 'react';
import './Sidebar.css'
import { Link,  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentAlt, faShareAlt, faShoppingBag, faSign, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import {Form,InputGroup,FormControl,Dropdown,DropdownButton} from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import './Footer.css';
import "../Navigation/Navigation.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Time from 'react-time-format';
import Button from "react-bootstrap/Button";
import {
	faUserCircle,
	faVideo,
	faCog,
} from "@fortawesome/free-solid-svg-icons";
import { data } from 'jquery';
// import swal from 'sweetalert'
import PostComment from './PostComment';

const  Sidebar =({id,video_products})=>{
    const [liked,setLiked]=useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [cmShow, setCmShow] = useState(false);
    let history = 0;
  
    return (
        <>
             <div className='videoSidebar'>
             <div className="videoSidebar__button">
            <img src="img/icon/follow.png" style={{width:'50px', }}/>
            <p>50</p>
            </div>
             <div className="videoSidebar__button">
 {
     liked ? <img src="img/icon/heartfillup.png" style={{width:'50px', }} alt='hulusthul'   onClick={e=>setLiked(false)}/> :  <img src="img/icon/heart.png" style={{width:'50px', }} onClick={e=>setLiked(true)}   />
 }
            
           <p>{liked? 300+1:300}</p>      
             </div>

             
            <div className="videoSidebar__button">
            <img src="img/icon/comment.png" alt='hulusthul' title='hulusthul' style={{width:'50px', }} onClick={() => setCmShow(true)}/>
            <p>50</p>
            </div>

            <div className="videoSidebar__button">
             <img src="img/icon/share.png" alt='hulusthul' title='hulusthul' style={{width:'50px', }} onClick={() => setSmShow(true)}/>
             <p>5</p>
            </div>

             {/* <div className="videoSidebar__button" >
               <img src="img/icon/shop.png" alt='hulusthul' title='hulusthul' style={{width:'50px', }} onClick={() => setLgShow(true)}  />
               <p></p>
             </div> */}
              
         {/*     <div className="videoSidebar__button  " >
                  <NavDropdown 
						title={
							<>
								<img src="img/s1.jpg" alt="Avatar" />
						
							 
							</>
						}
						id=""
						className=" osahan-right-navbar-user user-dropdown-link"
					>
						<a
							 href="https://shop.hulusthul.live/login"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faUserCircle} fixedWidth />{" "}
							login
						</a>
						<a
							 href="https://shop.hulusthul.live/register"
							className="dropdown-item"
							rolw="button"
						>
							<FontAwesomeIcon icon={faSignInAlt} fixedWidth />{" "}
				Signup
						</a>
					 
				
					 
				
                   </NavDropdown>  
     {/*   <DropdownButton title={
              <>
              <img src="img/s1.jpg" alt='name' style={{width:'auto'}} />
              </>
            } style={{color:'black !important'}} >
                 <Dropdown.Item href="http://shop.hulusthul.live/register">Signup</Dropdown.Item>
                 <Dropdown.Item href="http://shop.hulusthul.live/login">Login</Dropdown.Item>
          </DropdownButton>     
              </div>
              */}

             </div>

             <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Shop Now
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
     
       <VideoProduct video_products={video_products}/>

          </Modal.Body>
            </Modal>
           






            <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Share To
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 

          <div style={{display:'flex'}}>
            <a href="#">  <img src="img/icon/facebook.png" width="40px" className='mx-3' /></a>
            <a href="#">    <img src="img/icon/whatsapp.png" width="40px" className='mx-3' /></a>
            <a href="#">    <img src="img/icon/code.png" width="40px" className='mx-3' /></a>
            </div>
            </Modal.Body>
           </Modal>
           





           <Modal
          size="lg"
          show={cmShow}
          onHide={() => setCmShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Comments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
 
           <Comments video_products={video_products} id={id}/>
            
          <PostComment id={id} history={history}/>
           
                    
         { /*  <Form>
            <InputGroup className="m-2">
    <FormControl
      placeholder="Write Your Comment"
      aria-label="Write Your Comment"
      aria-describedby="basic-addon2"
    />
    <Button className='btn btn-sm btn-success'  >
      Post
    </Button>
  </InputGroup>
         </Form> */}
              
            </Modal.Body>
           </Modal>
        </>
    )
}
export default Sidebar;



export class VideoProduct extends Component {
  state={
    products:[],
    videoProducts:[]
  }
   



  componentDidMount(){
  
  this.fatchData(this.props.video_products)

    axios.get('https://shop.hoolo.live/api/allproducts')
    .then(res=>{
      this.setState({
        products:res.data
      })
    })
    .catch(err=>{
      console.log(`this is error from laravel ${err}`)
    })
  }
  fatchData(video_products){
   let getValue=video_products
   const ArrayValue=getValue.split(',')
    this.setState({
      videoProducts:ArrayValue
    })
  }
  
  render() {
 
 
    return (
      <Row>
     
        {
          this.state.products.map(({id,slug,offer_price,price,thumbnail,store_id})=>(
            
            this.state.videoProducts.map((e)=> ( e==id  &&  <Col md={4} sm={6} xs={6}>
            <div className='card p-3' >
           <a  href={`https://shop.hoolo.live/products/${id}/${slug}`}  className='videoProduct'>
         <img   className="img-fluid-video-product" src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`} alt={slug}/>

          <h5>{slug} </h5>
         <h6>
         {
           offer_price==0?<span>{ `৳ ${price}`}  </span>:<span> { `৳ ${offer_price} `} </span>    
           
         }  
         </h6>
       </a>
       </div>
       </Col>
            ))
           
          ))
        }
          
         </Row>
    )
  }
}


export class Comments extends Component {
  state={
    comments:[],
     
  }
   



  componentDidMount(){
  
 

    axios.get(`https://shop.hulusthul.live/api/videocomment/${this.props.id}`)
    .then(res=>{
      this.setState({
        comments:res.data
      })
      
    })
    .catch(res=>{
      console.log(`this is error from laravel ${res}`)
    })
  }

  componentDidUpdate(){
    
    axios.get(`https://shop.hulusthul.live/api/videocomment/${this.props.id}`)
    .then(res=>{
      this.setState({
        comments:res.data
      })
      
    })
    .catch(res=>{
      console.log(`this is error from laravel ${res}`)
    })
  }
  
  
  render() {
  
 
    return (
 <>
     
        {
          this.state.comments.map(({pro_id,user,comment,created_at,thumbnail,store_id})=>(
            
   
              <div>
               <div className='card m-2'>
            <div style={{display:'flex'}} className='p-2'>
                 
                
                   
                

                 <div>
                   <div style={{display:'flex', justifyContent:'space-between'}}>
                   <p><strong>{user} </strong></p> 

                   <p className='ml-3'> <Time value={created_at}  format="DD-MM-YYYY"/> </p>
                   
                   </div>

                  <div>   <p> {comment}  </p>  </div>
                 </div>

               </div>
               
               
            </div>
            </div>
            
           
          ))
        }
       </>   
        
    )
  }
}



// export class PostComment extends Component {

//   state={
//     user_id:101,
//     user:'',
//     video_id:this.props.id,
//     status:1,
//     email:'',
//     comment:''
    
//   }
 
//   onChangeHandler=(e)=>{
//     this.setState({
//           [e.target.name]:e.target.value
//        })
     
//     }
//     handleSubmit=(e)=>{
//       e.preventDefault();
  
    
      
      
 


//     axios.post('https://shop.hulusthul.live/api/videocomment',this.state)
//             .then(res=>{
//               if(res.data.status == 200){
				        
//                 swal('Success', 'Comment has been post Successfully', 'success')
//                    this.props.history.push('/')
//               }
              
//         })
//         .catch(error=>{
//           console.log(error)
  
//         })
//     e.target.reset();
//    this.setState({
//     user_id:101,
//     user:'',
//     video_id:this.props.id,
//     status:1,
//     email:'',
//     comment:''
//    })
  
//     }
//   render() {
//     return (
//       <div >
//         <div className="card blog">
// 				<div className="card-body">
		
// 					<Form onSubmit={this.handleSubmit}>
// 						<Row>
// 							<Col lg={6} md={6}>
// 								<Form.Group controlId="comment-author-name">
// 									<Form.Label>
// 										Your Name
// 										<span className="text-danger">*</span>
// 									</Form.Label>
// 									<Form.Control type="text" name="user"   value={this.state.user} onChange={this.onChangeHandler}/>
// 								</Form.Group>
// 							</Col>
// 							<Col lg={6} md={6}>
// 								<Form.Group controlId="comment-author-email">
// 									<Form.Label>
// 										Your Email
// 										<span className="text-danger">*</span>
// 									</Form.Label>
// 									<Form.Control
// 										type="email"
// 										placeholder=""
// 								    name='email'
//                     value={this.state.email}
//                     onChange={this.onChangeHandler}
// 									/>
// 								</Form.Group>
// 							</Col>
//               <Col lg={12} md={6}>

// 						<Form.Group controlId="comment-author-email">
// 							<Form.Label>
// 								Review <span className="text-danger">*</span>
// 							</Form.Label>

// 							<Form.Control   
//                onChange={this.onChangeHandler}  
//                type="text" 
//                 name="comment" 
//                 value={this.state.comment}
//                />
// 						</Form.Group>
//             </Col>
//             </Row>
// 						<Button variant="success"  type="submit">Post Comment</Button>
// 					</Form>
// 				</div>
// 			</div>
//       </div>
//     )
//   }
// }

 


/* function Example() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
        <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
  */

   