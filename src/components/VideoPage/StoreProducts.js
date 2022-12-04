import React, { Component } from 'react'
import "./VideoPage.css";
import axios from "axios";
import VideoProduct from './VideoProduct';
 
 
 


export default class StoreProducts extends Component {

  state={
    products:[],
    videoProducts:[]
  }
   



  componentDidMount(){
    const array=this.props.videoProduct;
    console.log(this.props.videoProduct);
  this.fatchData(array)

    axios.get('https://shop.hoolo.live/api/allproducts')
    .then(res=>{
      this.setState({
        products:res.data
      })
    })
    
  }
  fatchData(array){
   let getValue=array
   console.log(getValue);

  const ArrayValue=getValue.split(',')  
    this.setState({
      videoProducts:ArrayValue
    })
  }
  
  render() {
    
    return (
      <>
     
	 
          {this.state.products.map((product) =>  (
          
          this.state.videoProducts.map((e)=> ( e==product.id  &&     <div key={product.id}>
              <VideoProduct product={product} /> 
              
           </div>
          ))
           
			 
              
             /* this.props.video.map((video)=> video.store_id)==product.store_id &&<VideoProduct product={product} /> */
			 //*  console.log(this.props.video.map((video)=> JSON.parse(video.store_id))==product.store_id);
		 //*  console.log(this.props.video.map((video)=>  video.store_id == product.store_id))
			 ))}
      </>
    )
  }
}


 

 
 
 
  
 
 
