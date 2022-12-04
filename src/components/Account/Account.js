import "./Account.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import MyChannels from "./MyChannels";
import MyVideos from "./MyVideos";
import InfoCards from "./InfoCards";
import SingleChannelHero from "../UserAccount/SingleChannelHero";
import SingleChannelNav from "../UserAccount/AccountNav";
import MyVideoCard from "./VideoCard";
import SearchModal from "../Navigation/SearchModal";

const Account = () => {
	return (
		<>
		<ContentWrapper className="single-channel-page">
				<SingleChannelHero />
				<SingleChannelNav />
			 
			</ContentWrapper>
			
			<ContentWrapper>
				 
				<Container fluid className="pb-0">
					
					<Row>
						<InfoCards />
					</Row>

					<hr />

				 
			 
					<hr className="mt-0" />
			 
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Account;
