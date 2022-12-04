import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { CommentMedia, CustomMedia } from "./CommentMedia";
import "./VideoPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import RelatedVideoCard from './RelatedVideoCard';
import VideoBlock from '../Homepage/VideoBlock';
 


 
 export class RelatedVideo extends Component {

    state={
		isLoading:false,
		videos:[]
	}
	 componentDidMount(){
	
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
			 
             <div className="video-block section-padding ">
				<Row>
					 
                 

   
    
    {
        this.state.videos.map((video)=>(
           this.props.store_uuid===video.store_uuid && <Col lg={4} md={4} sm={6} className="mb-3" >
                <RelatedVideoCard key={video.id} video={video} />
                </Col>
        ))
    }

			 
 
                 
                 
                  
              
					 
				</Row>
			</div>
					 
				 
		  
		</>
         )
     }
 }
 
 export default RelatedVideo
 