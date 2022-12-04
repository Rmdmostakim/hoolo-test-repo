import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import MusicNoteIcon from "@material-ui/icons/MusicNote";
  // import Ticker from "react-ticker";
import axios from 'axios';
import VideoCategorySlide from './VideoCategory/VideoCategorySlider';
import ProductSlider from './productSlider/ProductSlider';
 



export class Footer extends Component {
  
  state={
    products:[],
    videoProducts:[]
  }
   



  componentDidMount(){
  
  this.fatchData(this.props.video_products)

    axios.get('https://shop.hoolo.live/api/allproducts')
    .then(res=>{
      this.setState({
        products:res.data
      })
    })
    .catch(err=>{
      console.log(`this is error from laravel ${err}`)
    })
  }
  fatchData(video_products){
   let getValue=video_products
   const ArrayValue=getValue.split(',')
    this.setState({
      videoProducts:ArrayValue
    })
  }
  render() {
    // const {store_logo,store_id,channel,description,title,uuid}=this.props
    // const  comment=this.state.videoComment.map((e)=>(e.comment))
    return (
      <>
     
          <div className="videoFooter"    >
   <ProductSlider products={this.state.products} videoProducts={this.state.videoProducts} />
              
            {/*  <div className="videoFooter__ticker">
                <FontAwesomeIcon icon={faAngleDoubleLeft} className="videoFooter__icon" />
               
                    <Ticker mode="smooth" >
                  {({ index }) => (
                    <>
                      
                      <p  > {description} </p>
                    </>
                  )}
                </Ticker> 
                     
               
              </div> */}

               {/* <div className='news-area'>
          <div className='tickers'>
            <div className='ticker-animation'>
            {
         this.state.videoComment.map((e)=>(
           
            <div className='ticker-item' key={e.id} > {e.comment} @{e.user} <span> || </span></div>  
          
         ))
       }
             
            
            </div>
          </div>
        </div> */}
       
           
          </div>
      </>
    )
  }
}

export default Footer


 

function VideoProduct() {
  return (
  
     <>
        
     </>
 
  )
}

 