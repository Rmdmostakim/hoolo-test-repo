import React from 'react'
import { Link } from 'react-router-dom';


const RelatedProduct=(props)=> {
  return (
    <Link to={`/product-details/${props.products.id}/${JSON.parse(props.products.product_name).en}`}>
    <div className='card related-product-card'>
        <img src={`https://shop.hoolo.live/images/simple_products/${props.products.thumbnail}`} alt='hoolo' />
    <div className='related-product-text'>
      <div className='product-title'>{JSON.parse(props.products.product_name).en}</div>
      <div className='product-price'>৳ {props.products.offer_price==null? props.products.price:props.products.offer_price }</div>
    </div>
    </div>
    </Link>
    
  )
}

export default  RelatedProduct;