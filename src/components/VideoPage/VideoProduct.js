import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import React from 'react'
import {VerifiedTooltip,UnverifiedTooltip} from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlayCircle,faEllipsisV,faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


function VideoProduct({ active = null,verified = false,product}) {

	const activeStatus = active
	? "video-card video-card-list active"
	: "video-card video-card-list";
    const categoryClass = verified
	? "video-page text-success-custom"
	: "video-page text-danger-custom";
	
	 return (
		 <>
		    
			 <div className={activeStatus}>

				
				<div className="video-card-image">
					 
					<a href="#">
						<img className="img-fluid"   src={`https://shop.hoolo.live/images/simple_products/${product.thumbnail}`} style={{height:'50px'}}  />
					</a>
				 
				</div>

				<div className="video-card-body">
					

					<div className="video-title">
						<a>{product.product_name.en}</a>
					</div>
					<div className={categoryClass}>
					  {JSON.parse(product.category_title).en }
					</div>
					<div  >
					{
						product.offer_price==0?<span style={{fontWeight:'700',}}>{ `৳ ${product.price}`}  </span>:<span> <strong> { `৳ ${product.offer_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${product.price}`}</strong> </span>    
				    
					}
					</div>
				</div>
			</div>
		 </>
	 )
 }
 
 export default VideoProduct;
 