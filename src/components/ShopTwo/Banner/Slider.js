import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slide from './Slide';
export default function Carousel(props) {
	return (
		<Slider
				speed={2000}
				display
				infinite
				autoplay
				slidesToScroll={1}
				autoplaySpeed={4000}
				cssEase="linear"
				arrows={false}
			>
				{
					props.banner.map((banner)=>(
						<Slide key={banner.id} img={banner.image} />
					))
				}
			</Slider>
	);
}
