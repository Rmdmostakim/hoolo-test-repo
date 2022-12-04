import React, { Component } from 'react'
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useEffect,useState } from "react";
import axios from 'axios';

 
export default class ProudctSlideClass extends Component {
	state={
		products:[],
		dots: false,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4000,
		 
		 
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	  }
	   settings = {
		
	};
	
	  componentDidMount(){
		axios.get('https://shop.hoolo.live/api/allproducts')
		.then(res=>{
		 
	
		  this.setState({
			products:res.data
		  })
		})
		.catch(res=>{
		 console.log(`this is error from products card ${res}`)
		})
	  }
	render() {
		return (
			<>
			<Slider {...this.state}>
				 {
							  this.state.products.map((product)=>(

							 this.props.store_uuid==product.store_uuid && <ProductCard product={product}/>
							  ))
						  }
			 </Slider>
			</>
		)
	}
}

 
