import {Container,Row,Col} from 'react-bootstrap'
import { CommentMedia, CustomMedia } from "./CommentMedia";
import ShopCart from '../Shop/ShopCard';
 import VideoShop from '../Shop/VideoShop';
import BasicShop from '../Shop/BasicShop';

 
export default function CommentBody() {
	return (
		<>
			 
					<div className="video-block section-padding">
						<Row>
                        
               <BasicShop/>
								
						</Row>
					</div>
					 
				 
		  
		</>
	);
}
