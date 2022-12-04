import React from 'react';
import {Link} from "react-router-dom";
import './ProductSlide.css';

function ProductSlide(props) {
  return (
    <div>
      <div className="product-slide-item">
        <Link  to={`/products/${props.slug}`}>
          <div className={props.offer_price==null? "product_tag_none":"product_tag"}>  
            {Math.round(((props.offer_price - props.price) /props.offer_price) *100)} % off
          </div>
          <img
            src={props.img}
            alt={props.product_name}
          />
        </Link>

        <div className="product_title">
          <Link  to={`/products/${props.slug}`}>
          {props.product_name}
          </Link>
        </div>   

        <div className="price" style={{fontWeight:'bold'}}>
        {props.offer_price == null ? (<span>{`৳ ${props.price}`} </span>) : 
          (
          <span>
            <strong style={{ textDecoration: "line-through",color:'orange' }}> {`৳ ${props.offer_price} `} </strong>
            <strong>{`৳ ${props.price}`}</strong>
          </span>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default ProductSlide;
