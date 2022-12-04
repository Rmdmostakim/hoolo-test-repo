import React, { Component } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";
import axios from 'axios';

export class VideoBlock extends Component {

	state={
		isLoading:false,
		videos:[]
	}
	 componentDidMount(){
	
		   axios.get('http://shop.hoolo.live/api/videos')
		  .then(res=>{
		 
	
			this.setState({
				videos:res.data
			})
		  })
		  .catch(res=>{
			alert(`this is error from laravel ${res}`)
		  })
	
		}
	   
	render() {
		return (
			<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="Featured Videos" />
					</Col>


					{this.state.videos.map((vendorVideo) => (
               
			   <Col xl={3} sm={6} className="mb-3" key={vendorVideo.id}>
                 <VideoCard
							 
							vendorVideo={vendorVideo}
							 
						/>
                  
                </Col>
              ))}
					 
				</Row>
			</div>
		</>
		)
	}
}

export default VideoBlock
