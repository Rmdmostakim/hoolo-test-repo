import React, { Component } from 'react'
import Slider from "react-slick";
import { useState,useEffect } from "react";
import Slide from "../Atomics/Slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



export class TopCategoriesSlider extends Component {

	state={
		allCategory:[]
	}

	componentDidMount(){
           axios.get('https://shop.hoolo.live/api/allcategories')
		   .then(res=>{
			   this.setState({
				   allCategory:res.data
			   })
		   })
	}
 
	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			initialSlide: 0,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 2000,
			// nextArrow: <SampleNextArrow />,
			// prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
		};
	
	 
	
	   
		return (
			<>
				
		 <Slider {...settings} >
			{this.state.allCategory.map((categories) => (
              
					
                
				  <Slide   categories={categories} key={categories.id}
				/>
			 		
			)
			)
			}
				
				</Slider>
			</>
		)
	}
}

export default TopCategoriesSlider
