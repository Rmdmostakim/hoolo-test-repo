import Button from "react-bootstrap/Button";
import './style.css'
import {
	VerifiedTooltip,
	VerifiedTooltipLinkDark,
} from "../CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
 

export default function SubscriptionChannelCard(props) {
	// const badgeVariant = success ? "text-success-custom" : "text-dark";
	//imgSrc="img/s1.jpg" views="1.4M" channelName="Channel Name" subscriberCount="382,323" success verified

/*	const showVerifyBadge = success ? (
		<VerifiedTooltip />
	) : (
		<VerifiedTooltipLinkDark />
	);

	const buttonVariant = success
		? "success"
		: isSubscribed
		? "secondary"
		: "danger";
	const buttonText = isSubscribed ? "Subscribed" : "Subscribe"; */
       const {name,email,store_logo,uuid,description}=props.store
	return (
		<>
			<div className="subscription-card">
				<div className="subscription-card-image">
				   <Link to={`/vendors/${uuid}`}>
						<img className="img-fluid" src={`https://shop.hoolo.live/images/store/${store_logo}`} alt="" />
					</Link>
					
				</div>
				<div className="channels-card-body">
					<div className="channels-title">
						<Link to={`/vendors/${uuid}`}>
							{name}   <VerifiedTooltip /> 
						</Link>
						<br/>
					 <FontAwesomeIcon icon={faEye}/> 1024 
					</div>
					<div className="channels-view w-75 m-auto py-2">
						<strong> {
							 description
						 }
						 </strong>
					</div>
					<div className="channels-card-image-btn">
						 
				
					 
					</div>
					<div className="channels-view" style={{display:'flex', justifyContent:'center'}}>
						 {/* <div  >
						 <Link to={`/vendors/${uuid}`} >
							<Button className="visitbtn" size="sm">
						      Visit Store 	 
							</Button>
							</Link>
						 </div> */}

						 <div>
						 &nbsp;&nbsp;&nbsp;
							<Button className="followbtn" size="sm">
							{/* <FontAwesomeIcon icon={faUserPlus} />	*/} Follow     
							</Button>
						 </div>
					</div>
				 
				</div>
			</div>
		</>
	);
}
