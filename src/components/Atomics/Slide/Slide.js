import "./Slide.css";

 

export default function Slide(props) {
 

	const {title,alt,image,url}=props.categories
	return (
		<>
		
			<div className="item">
				<div className="category-item">
				
						{/* <img
							className="img-fluid custom-slick-img"
						
							src={image==null ? 'img/category.png':`https://shop.hulusthul.live/images/category/${image}`}
							alt={alt}
							
					 /> */}
						<h6 style={{fontWeight:'700'}}>
							
						  {JSON.parse(title).en}  
							  
						</h6>
					
				 
				</div>
			</div>
		</>
	);
}
