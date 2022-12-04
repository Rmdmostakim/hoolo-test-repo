import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import {
	VerifiedTooltip,
	UnverifiedTooltip,
} from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlayCircle,
	faEllipsisV,
	faCalendarAlt,
	faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const VideoCardList = (props) => {
	const {	video,thumbnail,title,description,store_name,created_at,active = null,status,category_title} =props.video
	const activeStatus = active
		? "video-card video-card-list active"
		: "video-card video-card-list";
	const categoryClass = status
		? "video-page text-success-custom"
		: "video-page text-danger-custom";
		
	return (
		<>
			<div className={activeStatus}>
				<div className="video-card-image">
					<Link className="play-icon" to={`/video-show/${video}`}>
						<FontAwesomeIcon icon={faPlayCircle} />
					</Link>
					<Link to={`/video-show/${video}`}>
						<img className="img-fluid" src={`https://shop.hoolo.live/public/videos/${thumbnail}`} alt={title} />
					</Link>
				 
				</div>

				<div className="video-card-body">
					<SectionHeader
						dropdownOnly
						icon={faEllipsisV}
						noIconLabel
					/>

					<div className="video-title">
						<Link to={`/video-show/${video}`}>{title}</Link>
					</div>
					<div  className="video-view">
					<strong>	{JSON.parse(category_title).en}	</strong>
					</div>
					  <div className={categoryClass}>
					  
					  {store_name} {" "}
						{status==1 ? <VerifiedTooltip /> : <UnverifiedTooltip />}
	</div>  
				</div>
			</div>
		</>
	);
};

export default VideoCardList;
