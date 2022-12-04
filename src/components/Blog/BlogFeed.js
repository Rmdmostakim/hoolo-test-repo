import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import Paginate from "../Atomics/Paginate/Paginate";

import PostExcerpt from "./PostExcerpt";

export default function BlogFeed() {
	return (
		<>
			<Col md={12}>
				<SectionHeader heading="Privacy Policy" />
			</Col>
			<Col md={12}>
				<PostExcerpt/>		 
			</Col>
		</>
	);
}
