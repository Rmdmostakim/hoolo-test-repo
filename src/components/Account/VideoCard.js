 import "../Atomics/VideoCard/VideoCard.css"
import {Row,Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

 

export default function MyVideoCard(props){

{/*const   Video=props.vendorVideo

const { title,time,videoTitleHref,url,shopUrl,videoTitle,videoCategories,shop,views,timeAgo,video,iconHref,imgAlt,imgHref,imgSrc}=props.vendorVideo; */}
 
 

	
	return (
		<>
	
	        
			<div className="video-card">
			   
				<div className="video-card-image">
					<Link className="play-icon" to="#">
						<FontAwesomeIcon icon={faPlayCircle} />
					</Link>
					<Link to="#">
						<img className="img-fluid" src="https://shop.hoolo.live/api/video-show/1" alt="#" />
					</Link>
				 
				</div>
				<div className="video-card-body">

					<div className="video-title">
						<Link to="#"  > </Link>
					</div>

					<div
						
					> 
					<a style={{color:'#28a745', fontWeight:'700'}}  href= "#" >	   </a>
						    
					</div>
					<div className="video-view">
					 views &nbsp;
						<FontAwesomeIcon icon={faCalendarAlt} />   ago
					</div>
					<div>
						      
					</div>
					<hr/>
					<div style={{  margin:'5px 0px'}}>
					<Row>
                       <Col>
				 
					   </Col>
					  </Row>
					</div>
				</div>
			</div>
		</>
	);
}

 
