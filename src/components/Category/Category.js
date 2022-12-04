import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Categories = (props) => {
	const {title,image} = props;
	return (
		<div>
			<Link to={`/categories/${(JSON.parse(title).en).trim().replace(/ /g, "-").toLowerCase()}`}>   
				<div className='categories-slide-item'>
					<img src={`https://shop.hoolo.live/images/category/${image}`} alt="alter" />
					<div className='text-block'>
						{JSON.parse(title).en}
					</div>
				</div>
			</Link>
		</div>
	)
}
export default Categories;