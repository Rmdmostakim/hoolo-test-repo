import React, { Component } from 'react'
import "./VideoPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import StoreProducts from './StoreProducts';
import SingleVideoRight from "./SingleVideoRight";
import SingleVideoLeft from "./SingleVideoLeft";
// import { withRouter } from "react-router";
import VideoFrame from "./VideoFrame";
import axios from 'axios';
import Test from '../../Test';
import PreLoader from '../Atomics/Preloader/PreLoader';

class VideoPage extends Component {
	 state={
		video:'',
		 videos:[],
		 isloading:false,
		 
	 }
	componentDidMount() {
        const video = this.props.match.params.video
        this.fetchData(video);

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

    fetchData = video => {
		this.setState({
			video:video,
			isloading:true

		})
    };
	render() {
	 
		return (
			<>
		 
		 	{
				 this.state.isloading ? (
					<ContentWrapper>
					<Container fluid>
						<div className="video-block-right-list section-padding"  >
							<Row className="mb-4"  >
								<Col md={8} className="smFixedVideo">
								{   
					 this.state.videos.map((video)=>( 
				   this.state.video==video.video &&   <VideoFrame key={video.key} video={video} />
					   
						 
					   
		 ) )
			   
			   }
			
								
	
			 
									 
								</Col>
	
								 <Col md={4}  className="leftItems" >
								<div className="video-slider-right-list"     >
									 
									 {   
					 this.state.videos.map((video)=>( 
				   this.state.video==video.video &&   <StoreProducts  videoProduct={video.products}  />	 
					   
						 
					   
		 ) )
			   
			   }
								  </div>			 
							</Col>  
							</Row>
						</div>
	
						<div className="video-block section-padding sm-position" >
							<Row>
								<Col md={8} className='tagItem' >
								{   
					 this.state.videos.map((video)=>( 
				   this.state.video==video.video &&   <SingleVideoLeft  store_uuid={video.store_uuid}   />    
					   
						 
					   
		 ) )
			   
			   }
									
									 
								</Col>
	
								<Col md={4}>
								{   
					 this.state.videos.map((video)=>( 
				   this.state.video==video.video &&   <SingleVideoRight store_uuid={video.store_uuid}  />  
				  
					   
						 
					   
		 ) )
			   
			   }
									
								</Col>
							</Row>
						</div>
					</Container>
					<ThinFooter />
				</ContentWrapper>
				 ):(<PreLoader/>)
			 }
		</>
		)
	}
}

 
export default   VideoPage ;