import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Button } from "react-bootstrap";
import Cart from "./Cart";
import { useSelector,useDispatch } from "react-redux";
import { showCart } from "../../features/CartSlice";
import Searchbar from "./Searchbar";
import hoolo from './icons/hoolo.gif';
import store from './icons/store.svg'
import shop from './icons/shop.svg'
import profile from './icons/profile.svg'
import cart from './icons/addtocart.svg'
import live from './icons/live.svg'


export default function DesktopNav(props) {
	const location = useLocation();
	const dispatch = useDispatch();
	const {carts,show} = useSelector((state)=>state.cart);
	const cartShowHandler = () =>{
		dispatch(showCart(!show));
	}
	
	useEffect(()=>{
		if(location.pathname === '/view-cart' || location.pathname === '/checkout'){
			dispatch(showCart(false));
		}
	},[location,dispatch]);

	return (
		<>
			<Navbar sticky="top" className="osahan-nav d-nav">
				<Navbar.Brand className="brand">
					<Link to="/">
						<img className="img-fluid" src={hoolo} alt="hoolo" />
					</Link>
				</Navbar.Brand>

				<ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
					<li className="nav-item  search">
						{location.pathname !== '/view-cart' && location.pathname !== '/checkout' && location.pathname !== '/my-account' ? <Searchbar/>: null}
					</li>

					<li className="nav-item  shop">
						<Link to='/store' className="nav-link">
						<img src={store} alt="store"/>
						</Link>
					</li>
					<li className="nav-item  shop">
						<Link to="/collection" className="nav-link">
							<img src={shop} alt="shop"/>
						</Link>
					</li>

					<li className="nav-item  home">
						<Link to="/my-account" className="nav-link">
						<img src={profile} alt="profile"/>
						</Link>
					</li>
					<li className="nav-item ">
						<Button variant="none" size="sm" onClick={cartShowHandler}>
						<img src={cart} alt="cart"/>
							<Badge className="cart-badge" pill bg="primary">{carts !== null && carts.length>0 ? carts.length : 0}</Badge>
						</Button>
						{show && location.pathname !== '/view-cart' && location.pathname !== '/checkout' ? <Cart/>: null}

					</li>
				</ul>
			</Navbar>
		</>
	)

}
