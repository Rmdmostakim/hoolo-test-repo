import React, { Component } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import NullTable from "./NullTable";
import { Button } from "reactstrap";

const SellerInfo = (props) => {
  return (
    <>
      <div className="col-xl-4 col-sm-6 mb-4">
        <div className="card  o-hidden ">
          {/* <div className="card-body">
  
	<div className="card-body-icon">
		<FontAwesomeIcon icon={faShoppingCart} fixedWidth />
	</div>
	<div className=" d-flex justify-content-between">
		<b>Orders</b> 
		<strong style={{fontWeight:'900'}}> {props.totalOrders ==0 ? 'No Orders': props.totalOrders}</strong> 
	</div>
          </div> */}

          <Accordion>
            <Accordion.Toggle as={Card.Footer} variant="link" eventKey="0">
              <div  className="text-dark clearfix small z-1">
                <strong>
                <span className="float-left"><img src='/img/signout.png' alt='hoolo' /> Seller login</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </strong>
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <OrderTable />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SellerInfo;

function OrderTable(props) {
  return (

        <>
        <div className="m-2">
         {/* <Button className="btn btn-sm btn-danger mx-2"><a>Apply for Seller</a></Button> */}
          
        
         <Button className="btn btn-sm btn-success  mx-2"><a href="https://shop.hoolo.live/seller/login">Seller Login </a></Button>
        </div>
     
    </>
  );
}
