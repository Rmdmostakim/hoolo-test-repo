import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import TopCategoriesSlider from "./TopCategoriesSlider";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function TopCategory() {
	return (
		<>
			<div className="top-category section-padding mb-4">
				 

					 
						<TopCategoriesSlider />
					 
			 
			</div>
		</>
	);
}

export default TopCategory;
