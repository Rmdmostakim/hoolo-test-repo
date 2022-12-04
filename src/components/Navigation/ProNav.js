import React from 'react';
import { Link } from 'react-router-dom';
import  './pronav.css';

function pronav({addToCart,buyNow}) {
    
    return (
        <div className='full'>
            <div className='blue'>
            </div>
            <div className='navy'>
            </div>
            <div  className='pronav'>
                <button className='watchnow'><Link to="/">Watch Now</Link></button>
                <button className='buynow' onClick={buyNow}>Buy Now</button>
                <button className='addtocart' onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default pronav;