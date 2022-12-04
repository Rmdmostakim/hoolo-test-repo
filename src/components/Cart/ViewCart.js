import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {selectAll} from '../../features/CartSlice';
import {RiCheckboxBlankLine,RiCheckboxIndeterminateFill,RiCheckboxFill} from 'react-icons/ri';
import ProductList from "./ProductList";
import toast from 'react-hot-toast';
import Nodata from "../loading/Nodata";

const ViewCart = (props) => {
  const {carts,selected,subtotal} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const selectAllhandler = () =>{
    dispatch(selectAll());
  }

  const productListing = () =>{
    if(carts === null || carts.length === 0){
      return <Nodata/>;
    }else{
      return carts.map((cart)=>{
        return <ProductList key={cart.id} select={selected.includes(cart.id)? true :false} id={cart.id} name={cart.product.product_name} qty={cart.qty} image={cart.product.images[0].image} price={cart.product.unit_price}/>
      });
    }
  }

  const checkoutHandler = () =>{
    if(selected.length<1){
      toast.error('Select products first!');
    }
  }

  return(
    <Container className="cartContainer">
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          <div className="carts">
            <div className="cart-title hr">
              <div>
                <Button variant="none" onClick={selectAllhandler}>{selected.length < 1 ?<RiCheckboxBlankLine/>: selected.length < carts.length ?<RiCheckboxIndeterminateFill/> : <RiCheckboxFill className="selected"/> }</Button> <small className="fbold">Select All({selected.length} items)</small>
              </div>
            </div>
            <div className="products-list">
              {productListing()}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          <div className="product-summary">
            <div className="fbold"><span>Total:</span> <span style={{ color:'#FF6B00' }}>{subtotal} TK</span></div>
            <div className="link">{selected.length>0 ?<Link to="/checkout" state={{ path:'view-cart' }}>Proceed to Checkout</Link>:<span onClick={checkoutHandler}>Proceed to Checkouts</span>}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
 
}
export default ViewCart;