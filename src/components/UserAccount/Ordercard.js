import React from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {BsCaretUpFill,BsCaretDownFill} from 'react-icons/bs';
import Class from '../../assets/css/dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Ordercard(props) {
    const {order} = props;
    console.log(order);
    const [show,setShow] = useState(false);
    const showHandeler = () =>{
        setShow(!show);
    }

    const style = {
        display:'flex',
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    const detailsBox = {
        border:'1px solid #000000',
        borderRadius:'5px',
        padding: '5px',
    }
    const image = {
        width: '50px',
        height: '50px',
        borderRadius: '5px',
    }
    const productBox = {
        display:'flex',
        flexDirection:'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    };
    const returndHandler = (orderCode) =>{
        console.log(orderCode);
    }

    const orderDetails = () =>{
        return order.order.map(details=>(
            <Row key={details.id} style={detailsBox} className="mb-2">
                <Col md={3} xs={6} className="mb-2">
                    <img src={details.product.cover} style={image} alt={details.product.product_name} />
                </Col>
                <Col md={3} xs={6} className="mb-2">
                    <div>
                        <small><b>{details.product.product_name}</b></small>
                    </div>
                    <div style={productBox}>
                        <div className={Class.colorBox} style={{ backgroundColor:details.attributes[0] }}></div>
                        <div className={Class.sizeBox}><small>{details.attributes[1]}</small></div>
                        <div className={Class.sizeBox}><small><b>{details.qty}p</b></small></div>
                    </div>
                </Col>
                <Col md={2} xs={6} className="mb-2">
                    <div><small><b>Deivery status</b></small></div>
                    <div><small>{details.status === null ? 'Processing' : details.status}</small></div>
                </Col>
                <Col md={2} xs={6} className="mb-2">
                    <div><small><b>Unit Price:</b> {details.unit_price}</small></div>
                    <div><small><b>Sub Total:</b> {details.unit_price*details.qty}</small></div>
                </Col>
                <Col md={2} xs={12}>
                    {new Date().setDate(new Date().getDate()) <= new Date(details.updated_at).setDate(new Date(details.updated_at).getDate()+1) && order.status ==='Delivered'   && (<Button variant="danger" onClick={()=>returndHandler(details.order_code)} className="btn btn-sm">Return</Button>)}
                </Col>
            </Row>
        ));
    }

    return (
        <div>
            <div className="profilefixdiv">
                <div className="card perCard mt-2 mb-3">
                    <Row className="align-items-center">
                        <Col md={2} sm={12} className="mb-2">
                            <div>
                                <div><small><b>#order code</b></small></div>
                                <div><small>{order.order_code}</small></div>
                            </div>
                        </Col>
                        <Col md={2} sm={12} className="mb-2">
                            <div><small><b>created at</b></small></div>
                            <div><small>{order.created_at}</small></div>
                        </Col>
                        <Col md={2} sm={12} className="mb-2">
                            <div><small><b>Subtotal:</b> {order.total_price}</small></div>
                            <div><small><b>Shipping:</b> {order.shipping_cost}</small></div>
                            <div><small><b>Grandtotal:</b> {order.shipping_cost+order.total_price}</small></div>
                        </Col>
                        <Col md={2} sm={12} className="mb-2">
                            <div>
                                <div><small><b>Method</b></small></div>
                                <div><small>{order.payment_method}</small></div>
                            </div>
                            <div>
                                <div><small><b>Order status</b></small></div>
                                <div><small>{order.status === 0 ?<span style={{ color:'blue'}}>processing</span> : order.status === 1 ? <span style={{ color:'green'}}>Confirmed</span>: <span style={{ color:'red'}}>Cancelled</span>}</small></div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} style={style} className="mb-2">
                            <div>
                                <a href={`https://shop.hoolo.live/api/invoice/${order.order_code}`} target="_blank">Invoice</a>
                            </div>
                            <div>
                                <Button variant='none' siz="sm" onClick={showHandeler}>
                                    {show === true ? <BsCaretUpFill/>:<BsCaretDownFill/>}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    {show && orderDetails()}
                </div> 
            </div>
        </div>
    )
}
