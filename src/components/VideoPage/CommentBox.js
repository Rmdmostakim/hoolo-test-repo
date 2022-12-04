import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Navbar, Row } from "react-bootstrap";
import CommentBody from "./CommentBody";
import RelatedVideo from "./RelatedVideo";
import VideoShop from "../Shop/VideoShop";
 

const CommentBox = (props) => {
	return (
		<>
			 
			<div className="box  single-video-comment-tabs" >
			
				<Tabs defaultActiveKey="vidoe" >
				<Tab eventKey="vidoe"   title="products">
				<div className="video-block section-padding" >
						<Row>
                        
              <VideoShop store_uuid={props.store_uuid}/>
								
						</Row>
					</div>
					</Tab>
					<Tab  eventKey="disqus"     title="Related Video ">
					
				
					<RelatedVideo store_uuid={props.store_uuid}/>
					</Tab>
					
				 
				</Tabs>
			
			</div>
			 
		</>
	);
};

function Soon() {
	return <p>Coming Soon...</p>;
}

export default CommentBox;
