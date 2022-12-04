import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";
import VideoBlock from "../Homepage/VideoBlock";

export default function MyVideos() {
	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="My Videos" />
					</Col>
				</Row>
				<Row>
				 
				</Row>
			</div>
		</>
	);
}
