import React from 'react';
import CurrencyFormat from 'currency-formatter';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart } from '../../features/CartSlice';
import Classes from './cart.module.css';

export default function Cart() {
    const dispatch = useDispatch();
    const {carts} = useSelector((state)=>state.cart);
    const removeHandler = (cartId) =>{
        dispatch(removeCart(cartId));
    }

    const cartList = () => (
        <div className={Classes.cartList}>
            <h6 className={Classes.cartTitle}>Cart Items</h6>
            <div className={Classes.items}>
                {carts !== null && carts.length >0 ? carts.map((cart)=>{
                    return (
                        <div className={`${Classes.item} ${Classes.cart_cart}`} key={cart.id}>
                            <div className={Classes.itemImage}>
                                <img src={cart.product.images[0].image} alt=''/>
                            </div>
                            <div className={Classes.itemInfo}>
                                <div className={Classes.name}>
                                    <small>
                                        {cart.product.product_name.en}
                                    </small>
                                </div>
                                <div className={Classes.price}>
                                    <small>{cart.qty}x{cart.product.unit_price}</small>
                                </div>
                            </div>
                            <div>
                                <Button size="sm" variant="none" className={`${Classes.links}`} title="Remove" onClick={()=>removeHandler(cart.id)}>
                                    <FaTrash />
                                </Button>
                            </div>
                        </div>    
                    );
                }): <div className="text-center text-dark font-weight-bold">Empty Cart</div>} 
            </div>
            <div className={Classes.subtotal}>
                <div>
                    <span className="font-weight-bold">Subtotal</span>
                </div>
                <div>
                    <small className="font-weight-bold">
                        {CurrencyFormat.format(carts.reduce(function(sum, cart) {
                            return sum + cart.product.unit_price*cart.qty;               
                        }, 0), { code: 'BDT' })}
                    </small>
                </div>
            </div>
            <div className={Classes.links}>
                <Link to="/view-cart" className="btn btn-sm">
                    View Cart
                </Link>
            </div>
        </div>
    );
    return <div className={`${Classes.cart} bg-light rounded p-2`}>{cartList()}</div>;
}
