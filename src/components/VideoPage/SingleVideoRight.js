import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './VideoPage.css'
import VideoCardList from "./VideoCardList";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import React, { Component } from 'react'
import axios from "axios";

export class SingleVideoRight extends Component {
	state={
		 
		 videos:[],
		 
	 }
	componentDidMount() {
      

		axios.get('https://shop.hoolo.live/api/videos')
		.then(res=>{
		      this.setState({
			  videos:res.data
		  })
		})
		.catch(res=>{
		  console.log(`this is error from laravel ${res}`)
		})
    }

     
   
	render() {
		return (
			<>
			<div className="single-video-right">
				<Row>
				 
					<Col md={12}>
						 
						<SectionHeader heading="Up Next" />
					</Col>
					{
						this.state.videos.map((video)=>(
							this.props.store_uuid ===video.store_uuid  &&  <Col md={12}> 
								<VideoCardList
								 
									video={video}
								/>
									</Col>
									 
						 
						))
					}
					
						
						 
				
				</Row>
			</div>
		</>
		)
	}
}

 




function AdBlock() {
	return (
		<>
			<div className="adblock">
				<div className="img">
					Google AdSense
					<br />
					336 x 280
				</div>
			</div>
		</>
	);
}

export default SingleVideoRight;
export { AdBlock };
