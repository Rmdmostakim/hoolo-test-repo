import "./Slide.css";

 

export default function Slide(props) {
 

 
	return (
		<>
	 
<div className="product-item">
				<div className="product-category-item">
				
					  <img
							className="img-fluid custom-slick-img"
							alt='image'
							src={`https://shop.hoolo.live/images/simple_products/gallery/${props.slideimage}`}
					 /> 
						<h6 style={{fontWeight:'700'}}>
							
						
							  
						</h6>
					
				 
				</div>
			</div>
		 
			
		</>
	);
}
