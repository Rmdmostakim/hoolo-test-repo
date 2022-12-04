import React from "react";
import "./Slide.css";

 

export default function Slide(props) {
 

	const {title,alt,image,url}=props.categories
	return (
		<>
		
			<div className="item">
				<div className="video-category-item">
				
						<h6 onClick={()=>props.category(`${JSON.parse(title).en}`)} >
					          {JSON.parse(title).en}  
							  
						</h6>
					
				 
				</div>
			</div>
		</>
	);
}
