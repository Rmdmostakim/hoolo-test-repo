import React,{useRef,useState,useEffect} from 'react';
import { Col, Container, Row,Table,Button } from 'react-bootstrap';
import {useReactToPrint} from "react-to-print";
import Classes from '../assets/css/Invoice.module.css';
import logo from '../components/Navigation/icons/hoolo.svg';
import inv from '../assets/images/inv.jpg';
import { useParams } from 'react-router-dom';
import Notfound from '../components/loading/Notfound';
import Load from '../components/loading/load';
import Servererror from '../components/loading/Servererror';
import axios from 'axios';
import '../assets/css/printing-invoice.css';
function Invoice() {
    const componentRef = useRef();
    const {orderCode} = useParams();
    const [isLoading,setLoading] = useState(true);
    const [notFound,setNotfound] = useState(false);
    const [error,setError] = useState(false);
    const [orders,setOrders] = useState(null);
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
        function fetch(){
            const id = localStorage.getItem('id');
            axios.get(`https://shop.hoolo.live/api/user/order/${orderCode}/${id}`)
            .then((res)=>{
                if(res.status === 200){
                    setOrders(res.data);
                    setLoading(false);
                    setNotfound(false);
                }else{
                    setLoading(false);
                    setNotfound(true);
                }
            })
            .catch(()=>{
                setLoading(false);
                setError(true);
            });
        }fetch();
    },[]);
    // print handler
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [print,setPrint] = useState(false);
    const printer = () =>{
        setPrint(true);
        setTimeout(() => handlePrint(), 1000);
        setTimeout(() => setPrint(false), 1000);
    }
    const printing = () =>{
		return (
            <div className="invoice-box mt-5" ref={componentRef}>
                <div className='inv-top'>
                    <img className="logo" src ={logo} alt ="logo" />
                    <div className="top-right">
                        Invoice:
                        {orders.order_code} <br/>
                        Date: 
                        {orders.created_at}
                    </div>
                </div>
                <img className="inv" src ={inv} alt ="invoice" />
				<div className="information">
                <Row>
                    <Col xl={6} md={6}  sm={6} xs={6} >
                        <h5>Billing Information</h5>
                        <h6>Name: {orders.user.name}</h6>
                        <h6>Address: {orders.user.address}</h6>
                        <h6>Phone: {orders.user.mobile}</h6>
                        <h6>E-mail: {orders.user.email}</h6>
                    </Col>
                    <Col xl={6} md={6}  sm={6} xs={6}>
                        <h5>Shipping Information</h5>
                        <h6>Name: {orders.shipping.name}</h6>
                        <h6>Address: {orders.shipping.address},{orders.shipping.thana},{orders.shipping.city}</h6>
                        <h6>Phone: {orders.shipping.phone}</h6>
                    </Col> 
                </Row>
                </div>			
                <table className = "main-table">
                    <thead>
                        <tr className="heading" >
                            <th>store</th>
                            <th>Item</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.order.map((order)=>{
                            return(
                                <tr key={order.id}>
                                    <td>{order.store.name}</td>
                                    <td>{order.product.product_name}</td>
                                    <td>
                                    <div style={{height:'15px',width:'30px',backgroundColor:order.attributes[0]}}>
                                    </div>
                                    </td>
                                    <td>{order.attributes[1]}</td>
                                    <td>{order.unit_price}</td>
                                    <td>{order.qty}</td>
                                    <td>{order.qty*order.unit_price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='totalinfo'>
                    <div>
                        sub total:{orders.order.reduce((cur,next)=>cur+next.qty*next.unit_price,0)} tk
                    </div>
                    <div>
                        shipping:{orders.shipping_cost} tk
                    </div>
                    <div>
                        discount:00 tk
                    </div>
                    <div>
                        Total:{orders.total_price+orders.shipping_cost} tk
                    </div>
                </div>
                <div className='text-center bg-success mt-2'>
                    <small><b>Thank you for being with hoolo.live</b></small>
                </div>
		    </div>
        );
    };

    const invoice = () =>{
        return(
            <>
                <Container className='mt-2'>
                    <div className={`${Classes.invoicebox} rounded`}>
                        <div className={Classes.invtop}>
                            <div>
                                <img className={Classes.logo} src ={logo} alt ="logo" />
                            </div>
                            <div className='text-center'>
                                <p>
                                    Invoice:
                                    {orders.order_code}<br/>
                                </p>
                                <p>
                                    Date: 
                                    {orders.created_at}
                                </p>
                            </div>
                        </div>   
                        <div>
                            <img className={Classes.inv} src ={inv} alt ="invoice" />  
                        </div>
                        <div>
                            <Row>
                                <Col md={6} sm={6} className='mb-2'>
                                    <div>
                                        <h5>Billing Information</h5>
                                        <h6>Name: {orders.user.name}</h6>
                                        <h6>Address: {orders.user.address}</h6>
                                        <h6>Phone: {orders.user.mobile}</h6>
                                        <h6>E-mail: {orders.user.email}</h6>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} className='mb-2'>
                                    <div>
                                        <h5>Shipping Information</h5>
                                        <h6>Name: {orders.shipping.name}</h6>
                                        <h6>Address: {orders.shipping.address},{orders.shipping.thana},{orders.shipping.city}</h6>
                                        <h6>Phone: {orders.shipping.phone}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Table bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Store</td>
                                            <td>Item</td>
                                            <td>Price</td>
                                            <td>Qty</td>
                                            <td>Total</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.order.map((order)=>{
                                            return(
                                                <tr key={order.id}>
                                                    <td>{order.store.name}</td>
                                                    <td>{order.product.product_name}</td>
                                                    <td>{order.unit_price}</td>
                                                    <td>{order.qty}</td>
                                                    <td>{order.qty*order.unit_price}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col md={3} sm={6} className='thank mb-2'>
                                    <p>
                                        sub total:
                                        {orders.order.reduce((cur,next)=>cur+next.qty*next.unit_price,0)} tk
                                    </p>
                                </Col>
                                <Col md={3} sm={6} className='thank mb-2'>
                                    <p>shipping:{orders.shipping_cost} tk</p>
                                </Col>
                                <Col md={3} sm={6} className='thank mb-2'>
                                    <p>discount:00 tk</p>
                                </Col>
                                <Col md={3} sm={6} className='thank mb-2'>
                                    <p>Total:{orders.total_price+orders.shipping_cost} tk</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="d-grid gap-2"><Button variant="success" size="sm" onClick={printer}>Print</Button></div>
                    </div>
                </Container>
                {print && <div style={{ display:'none' }}>{printing()}</div>}
            </>
        );
    }

    return (
        <>
            {isLoading && <Load/>}
            {notFound && <Notfound/>}
            {error && <Servererror/>}
            {orders && invoice()}
        </>
    );
}

export default Invoice;