import React, { useState,} from 'react'
import "./ShareVideo.css";
import Container from "react-bootstrap/Container";
import ThinFooter from "../../Footer/ThinFooter";
import ContentWrapper from "../../Atomics/ContentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import ShareVideoCase from './ShareVideoCase';
import PreLoader from '../../Atomics/Preloader/PreLoader';

function ShareVideo(props) {
	let {id } = useParams();
  


 
	return (
	  <>   
        {
             props.isloading?
              <ContentWrapper> 
             <Container fluid>
           { 
     
                     props.alldetails.map((details, index) => (
      
       
                         <ShareVideoCase
                         video={details.video}
                         comments={details.comments}
                         likes={details.likes}
                         follows={details.follows}
                         products={details.products}
                         users={details.users}
                         key={index}
                         videoId={id}
                       />
                     ))
                   }
                     
                 
                 
                   </Container>
                   <ThinFooter />
               </ContentWrapper> 
               : <PreLoader />
        }  
		  
		
		 
	 
  
  
	  
	  </>
	)
  }
export default ShareVideo;

{
	/* <Video store={uuid} alldetails={props.alldetails} /> */
}