import React, { Component } from 'react'
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faCircle, } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import '../Live/VideoCategory/Slide.css'
import { Link } from 'react-router-dom';


// export class ChildNav extends Component {

// 	state={
// 		allCategory:[],
// 		show: true,
//         scrollPos: 0
// 	}

// 	componentDidMount(){

// 		   window.addEventListener("scroll", this.handleScroll);
// 	}

// 	componentWillUnmount() {
// 		window.removeEventListener("scroll", this.handleScroll);
// 	  }
// 	handleScroll = () => {
// 		// console.log(document.body.getBoundingClientRect());
// 		this.setState({
// 		  scrollPos: document.body.getBoundingClientRect().top,
// 		  show: document.body.getBoundingClientRect().top > this.state.scrollPos
// 		});
// 	};

// 	render() {

//     const settings = {
// 			dots: false,
// 			infinite: true,
// 			speed: 500,
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			initialSlide: 0,
// 			swipeToSlide: true,
// 			autoplay: false,
// 			autoplaySpeed: 2000,
// 			responsive: [
// 				{
// 					breakpoint: 1200,
// 					settings: {
// 						slidesToShow: 3,
// 						slidesToScroll: 1,
// 						initialSlide: 1,
// 					},
// 				},
// 				{
// 					breakpoint: 1000,
// 					settings: {
// 						slidesToShow: 3,
// 						slidesToScroll: 1,
// 						initialSlide: 1,
// 					},
// 				},
// 				{
// 					breakpoint: 600,
// 					settings: {
// 						slidesToShow: 3,
// 						slidesToScroll: 1,
// 						initialSlide: 1,
// 					},
// 				},
// 			],
// 		};


// 		return (
// 			<>
// 			 <nav  className={this.state.show ? "show videosCategory" : "hide videosCategory"} >

// 		 <Slider {...settings}  >


// 			<div className="item">
// 				<div className="videos-category-item"  >


// 						   Following




// 				</div>
// 			</div>

// 			<div className="item">
// 				<div className="videos-category-item bgj">


// 				<Link to="/" className='link'>
// 					Trending
// 				</Link>

// 				</div>
// 			</div>

// 			<div className="item">
// 				<div className="videos-category-item">

// 				<Link to="/discover" className='link'>
// 					Discover
// 				</Link>

// 				</div>
// 			</div>


// 				</Slider>
// 				</nav>
// 			</>
// 		)
// 	}
// }




const ChildNav = (props) => {
	const [scrollPos, setScrollPos] = useState(0);
	const [show, setShow] = useState(true);


	const handleScroll = () => {
		setScrollPos(document.body.getBoundingClientRect().top);
		setShow(document.body.getBoundingClientRect().top > scrollPos)

	};


	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: false,
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
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
			<nav className="videosCategory">

				<Slider {...settings} >


					<div className="item">
						<div className={props.category === 'follow'? "videos-category-item active":"videos-category-item"} onClick={() => props.CategoryUpdate('follow')} >
							Following
						</div>
					</div>

					<div className="item">
						<div className={props.category === 'trending'? "videos-category-item active":"videos-category-item"} onClick={() => props.CategoryUpdate('trending')}>
							Trending
						</div>
					</div>

					<div className="item">
						<div className={props.category === 'discover'? "videos-category-item active":"videos-category-item"} onClick={() => props.CategoryUpdate('discover')}>
							Discover
						</div>
					</div>


				</Slider>
			</nav>
		</>
	)
}

export default ChildNav


