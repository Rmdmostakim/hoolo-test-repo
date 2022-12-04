import VideoTitle from "./VideoTitle";
import AuthorBox from "./AuthorBox";
import VideoDescription from "./VideoDescription";
import CommentBox from "./CommentBox";
import {Row} from 'react-bootstrap'

const SingleVideoLeft = (props) => {
	return (
		<>
		
			<div className="single-video-left">
				 
				 
			{/*	<VideoTitle
					title="Contrary to popular belief, Lorem Ipsum (2020) is
							not."
					views="2,729,347"
					
				/>
	*/}
			

			{ /*	<VideoDescription /> */}
               

				<CommentBox store_uuid={props.store_uuid}  />
		 
				 
			</div>
		</>
	);
};

export default SingleVideoLeft;
