import "./Homepage.css";
import TopCategory from "./TopCategory";
import VideoBlock from "./VideoBlock";
import PopularChannels from "./PopularChannels";
import FatFooter from "../Footer/FatFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import Shop from "../Shop/Shop";

 
 

const VideoList = ({products}) => {
	return (
		<>
			<ContentWrapper>
			 
			 
         
			
					 <TopCategory />
					<hr />
					<VideoBlock />
				 
		          

				<FatFooter />
			</ContentWrapper>
		</>
	);
};

export default VideoList;
