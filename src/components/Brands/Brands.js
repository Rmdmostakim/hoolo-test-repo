import React from 'react'
import { Link } from 'react-router-dom';
import './Brand.css'
const Brands = (props) => {
    const {image,id} = props;
	return (
            <div>
                <div className='brandimgdiv'>
                <Link to={`/brand/${id}`}>
                    <img className='brandimg' src={`https://shop.hoolo.live/images/brands/${image}`} alt="alter"/>
                </Link>
                    
                </div>
                
            </div>
                
	)
}
export default Brands;
