import React, {useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ThinFooter from "../Footer/ThinFooter";
import swal from "sweetalert";
import axios from "axios";
import "./Cart.css";
import { useParams } from "react-router-dom";

function BuyNow(props) {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);
  
    const {proID, qty}=useParams();
    const [cart, setCart]=useState([]);
    const id = localStorage.getItem("id");
	  const [formValue, setFormValue]=useState({user_id:id,id:proID,firstname:'', lastname:'', email:'',phone:'',address:'',city:'',country:'Bangladesh',area:'',postcode:'',qty:qty})



const onchangeHandler=(e)=>{
   e.preventDefault()
   setFormValue({
	   ...formValue,   [e.target.name]: e.target.value
   })

  
}

const handleSubmit=(e)=>{
	e.preventDefault();
	axios.post('https://shop.hoolo.live/api/buynow',formValue)
	.then(res=>{
		swal("Hoolo",`${res.data.Message}` , "success");
        props.navigate("/success")
        
	})
	// .catch(err=>{
	// 	console.log(err)
	// })
	
}

  return (
    <div>
      <ContentWrapper>
        <Container fluid>
          <section className="section-padding">
            <Form onSubmit={handleSubmit}>
              <Row  style={{ display:'flex',justifyContent:"space-around" }}>

                <Col lg={12} md={12} className="section-title text-left mb-4 mt-2">
                  <h2>Checkout</h2>
                  <hr />
                </Col>

                <Col lg={7} md={7} sm={12} className="card shadow py-5 mb-5">
                  <h4 className="pb-3">Billing Details</h4>

                  <Form.Row>

                    <Form.Group as={Col} controlId="full-name">
                      <Form.Label>
                        First Name
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
					              name="firstname"
                        type="text"
                        placeholder="First Name"
                        required
						           onChange={onchangeHandler}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="full-name">
                      <Form.Label>
                        Last Name
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
					             name="lastname"
                        type="text"
                        placeholder="Last Name"
                        required
					            	onChange={onchangeHandler}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="full-name">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
					              name="email"
                        type="text"
                        placeholder="Email"
                        required
						           onChange={onchangeHandler}
                      />
                    </Form.Group>


                  
                
					      <Form.Group as={Col} controlId="full-name">
                      <Form.Label>Phone</Form.Label> <span className="text-danger">*</span>
                      <Form.Control
					              name="phone"     
                        type="text"
                        placeholder="Phone"
                        required
						            onChange={onchangeHandler}
                      />
                    </Form.Group> 
                  </Form.Row>

              

                  <Form.Row>
				  
				  <Form.Group as={Col} controlId="full-name">
                      <Form.Label>
                        Country
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
					       
                        type="text"
                        placeholder="Country"
                        required
                        value="Bangladesh"
                       
						            
                      />
                    </Form.Group>

					<Form.Group as={Col} controlId="full-name">
                      <Form.Label>
                       City
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
					    name="city"
                        type="text"
                        placeholder="Town/City"
                        required
						onChange={onchangeHandler}
                      />
                    </Form.Group>



                 
                  </Form.Row>

                  <Form.Row>
				
              
					<Form.Group as={Col} controlId="full-name">
                      <Form.Label>Street adrees</Form.Label>     <span className="text-danger">*</span>
                      <Form.Control
					    name="address"
                        type="text"
                        placeholder="Street Number House Number and Appartment Number"
                        required
						onChange={onchangeHandler}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
				  <Form.Group as={Col} controlId="full-name">
                      <Form.Label>Area</Form.Label>     <span className="text-danger">*</span>
                      <Form.Control
					    name="area"
                        type="text"
                        placeholder="Area"
                        required
						onChange={onchangeHandler}
                      />
                    </Form.Group>

				  <Form.Group as={Col} controlId="full-name">
                      <Form.Label>Postcode/ZIP</Form.Label>    <span className="text-danger">*</span>
                      <Form.Control
					    name="postcode"
                        type="text"
                        placeholder="Postal Code"
                        required
						onChange={onchangeHandler}
                      />
                    </Form.Group>
			
                    <Form.Group as={Col}>
                          <Form.Label>Payment Method</Form.Label>
                          <Form.Control as="select" defaultValue="Pay Cash">
                            <option>Pay Cash </option>
                            <option>Pay Card</option>
                          </Form.Control>
                         </Form.Group>

                  </Form.Row>

           

                </Col>

                <Col lg={4} md={4} sm={12} className="card shadow py-5 mb-3 " style={{ height: "100%" }}>
					
                  <h4 className="pb-3">Your order</h4>

                  <Form.Row>
                    <Form.Group as={Col} controlId="full-name">
                      <Form.Label>Product</Form.Label>
                      <hr className="hr" />
                     
						  {
                             props.alldetails.map(products=>products.products.map(product=>proID==product.id&& <div
								style={{
								  display: "flex",
								  justifyContent: "space-between",
								}}
								key={product.id}
							  >
								  
								  <p style={{ color: "black" }}>
                           {JSON.parse(product.product_name).en}    * <strong >{qty}</strong>
                          <br />
                          Vendor: {product.store_name}
                        </p>

                        <p style={{ color: "black", }}>
                          <strong>BDT. {product.offer_price
                                    ? product.offer_price*qty
                                    :product.price*qty}</strong>
                        </p>
                                </div>
                                ))
                             ||
							  cart.map((cart,index)=>(
								<div
								style={{
								  display: "flex",
								  justifyContent: "space-between",
								}}
								key={cart.id}
							  >
								  
								  <p style={{ color: "black" }}>
                           {JSON.parse(cart.product_name).en}    * <strong >{cart.qty}</strong>
                          <br />
                          Vendor: {cart.store_name}
                        </p>

                        <p style={{ color: "black", }}>
                          <strong>BDT. {cart.semi_total
                                    ? cart.semi_total
                                    : cart.price_total}</strong>
                        </p>
                                </div>
							  ))
						  }
                       
                    </Form.Group>
                  </Form.Row>

                  <hr className="hr" />

 

               
				  <Form.Row>
                    <Form.Group as={Col} controlId="full-name" style={{display: "flex",justifyContent: "space-between",}} >
                      <Form.Label>
                        Shipping: Hulu Store
                        <br />
                        Flat Rate :
                      </Form.Label>

					  <Form.Label>50</Form.Label>
                    </Form.Group>
                    
                
                    
                  </Form.Row>
				  <hr className="hr" />

                  <Form.Row>
                    <Form.Group as={Col} controlId="full-name" style={{display: "flex",justifyContent: "space-between",}}>
                      <Form.Label style={{ fontSize: "20px", color: "black" }}>
                        Subtotal(BDT) : 
                         {/* {
                            props.alldetails.map(products=>products.products.map(product=>proID==product.id&& product.offer_price
                                    ? product.offer_price*qty
                                    :product.price*qty
                        
                                ))
                        } */}
                      </Form.Label>

					 
                    {
                            props.alldetails.map(products=>products.products.map(product=>proID==product.id&&  <Form.Label
                                className="text-danger"
                                style={{ fontSize: "20px" }}
                              >
                              {  product.offer_price
                                    ? product.offer_price*qty
                                    :product.price*qty}
                                    </Form.Label>
                                ))
                        }
                    

                    </Form.Group>
                  
                  </Form.Row>

                  <hr className="hr" />

                

                  <Button variant="success"  type="submit" className="w-25 ml-auto">Place to Order</Button>

                </Col>

              </Row>
            </Form>
          </section>
        </Container>
		<ThinFooter/>
      </ContentWrapper>
    </div>
  );
}

export default BuyNow;
