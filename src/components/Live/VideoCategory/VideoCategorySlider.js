import React, { Component } from 'react'
import Slider from "react-slick";
import { useState,useEffect } from "react";
import Slide from "./Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle,} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';





 




export class VideoCategorySlide extends Component {

	state={
		allCategory:[],
		show: true,
        scrollPos: 0
	}

	componentDidMount(){
           axios.get('https://shop.hoolo.live/api/allcategories')
		   .then(res=>{
			   this.setState({
				   allCategory:res.data
			   })
		   })
		   window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	  }
	  handleScroll = () => {
		// console.log(document.body.getBoundingClientRect());
		this.setState({
		  scrollPos: document.body.getBoundingClientRect().top,
		  show: document.body.getBoundingClientRect().top > this.state.scrollPos
		});
	  };
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
						slidesToShow: this.state.allCategory.length,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 3,
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
			 <nav  className={this.state.show ? "show videoCategory" : "hide videoCategory"} >

		 <Slider {...settings}  >
		 <div className="item">
				<div className="video-category-item">
				
						<h6 onClick={()=>window.location.reload()} >
					          
							  All
						</h6>
					
				 
				</div>
			</div>

			{this.state.allCategory.map((categories) => (
              
					
                
				  <Slide category={this.props.category}   categories={categories} key={categories.id} />
			 		
			)
			)
			}
				
				</Slider>
				</nav>
			</>
		)
	}
}

export default VideoCategorySlide
 

 