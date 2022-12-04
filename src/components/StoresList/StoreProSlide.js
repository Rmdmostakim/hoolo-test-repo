import React from 'react';
import {Link} from "react-router-dom";

function StoreProductSlide(props) {
  return (
    <div className="storeProduct">
        <Link  to={`/products/${props.slug}`}>
          <div className={props.offer_price==null? "product_tag_none":"product_tag"}>  
            {Math.round(((props.offer_price - props.price) /props.offer_price) *100)} % off
          </div>
          <img className='StoreProImg'
            src={props.img}
            alt={props.product_name}
          />
        </Link> 

        <div className="StoreProprice">
        {props.offer_price == null ? (<span>{`৳ ${props.price}`} </span>) : 
          (
          <span>
            <strong style={{ textDecoration: "line-through", color:'orange'}}> {`৳ ${props.offer_price} `} </strong>
            <strong>{`৳ ${props.price}`}</strong>
          </span>
          )
        }
        </div>
    </div>
  )
}

export default StoreProductSlide;
