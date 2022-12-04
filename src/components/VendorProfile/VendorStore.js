import React, { useState,useEffect} from 'react'
import "./VendorStore.css";
import Container from "react-bootstrap/Container";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ChannelNav from "./ChannelNav";
import { useParams } from "react-router-dom";
import PreLoader from '../Atomics/Preloader/PreLoader';
import VendorProducts from './VendorProducts';
import VendoreVideoCase from './VendorVideoCase';

function VendorStore(props) {

	let [status,setStatus]=useState('video');
	let { uuid } = useParams();
  

	let UpdateStore=(type)=>{
	  setStatus (type);
   }
   useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);

  console.log(props);
 
	return (
	  <>   {
		 props.isloading ? (<div>{
  
		props.stores.map((store)=>(
		  uuid===store.uuid &&   <ContentWrapper className="single-channel-page" key={store.id}>
			
			  <ChannelNav navContent={store} nav={status} updateStore={UpdateStore.bind(this)}/>
		   
			  <Container fluid className="pb-0">
			
			   {
			   
			   status==='store' ? 
			 
			      <VendorProducts store_uuid={uuid} alldetails={props.alldetails}/>
				   : 

			    props.alldetails.map((details, index) => (
 
 
				<VendoreVideoCase
				  searchTerm={props.searchTerm}
				  video={details.video}
				  history={props.history}
				  comments={details.comments}
				  likes={details.likes}
				  follows={details.follows}
				  products={details.products}
				  users={details.users}
				  store_uuid={uuid}
				  key={index}
				/>
				))
			  }
				
			
			
			  </Container>
			  <ThinFooter />
		  </ContentWrapper> 
		  
		
		 
	  ))
	}</div>) : (<PreLoader/>)
	  }
  
  
	  
	  </>
	)
  }
export default VendorStore;