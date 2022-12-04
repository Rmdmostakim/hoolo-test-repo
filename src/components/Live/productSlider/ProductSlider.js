import React, { Component } from 'react'
import Slider from "react-slick";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle,} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import './ProductSlider.css'



export class ProductSlider extends Component {

  
 
	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
			initialSlide: 0,
			swipeToSlide: true,
			autoplay: false,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
		};
	
        const activeStatus = null
        ? "product-card-list active"
        : "product-card-list";
        const categoryClass = false
        ? "video-page text-success-custom"
        : "video-page text-danger-custom";
	
	   
		return (
			<>
				
		 <Slider {...settings} className="slides"  >
		
              
					
               
                {
             this.props.products.map(({id,slug,offer_price,price,thumbnail,category_title,store_id,product_name})=>(
            
             this.props.videoProducts.map((e)=> ( e==id  &&  <>
<div className={activeStatus}>
<div className="product-card-image">
     
<a  href={`https://shop.hulusthul.live/products/${id}/${slug}`}>
        <img className="img-fluid"    src={`https://shop.hulusthul.live/images/simple_products/${thumbnail}`} alt={slug} style={{height:'50px'}}  />  
   
    </a>
 
</div>

<div className="product-card-body">
    

    <div className="product-title">
        <a href={`https://shop.hulusthul.live/products/${id}/${slug}`} className='priceLink'>{product_name.en}</a>  
    </div>
    {/* <div className={categoryClass}>
       {JSON.parse(category_title).en }  
    </div> */}
    <div  className='price'>
        
     {
         offer_price==0?<span style={{fontWeight:'700',}}>{ `৳ ${ price}`}  </span>:<span> <strong> { `৳ ${ offer_price}`} </strong>  </span>    
    
    }  
    </div>
</div>
</div>  

       </>
            ))
           
          ))
        }
				
				</Slider>
			</>
		)
	}
}

export default ProductSlider
