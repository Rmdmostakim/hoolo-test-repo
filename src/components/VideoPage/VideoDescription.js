import { Tag, TagCloud } from "../Blog/TagCloud";

export default function VideoDescription() {
	return (
		<>
			<div className="single-video-info-content box mb-3">
				 
			<DescriptionBlock
					heading="Description"
					body="It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as evolved over
					the years, sometimes"
				/>
				<DescriptionBlock
					heading="Category"
					body="Gaming , PS4 Exclusive , Gameplay , 1080p"
				/>
				

			 
			</div>
		</>
	);
}

function DescriptionBlock({ heading, body }) {
	return (
		<>
			<h6>{heading}</h6>
			<p>{body}</p>
		</>
	);
}
