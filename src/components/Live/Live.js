import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ContentWrapper from '../Atomics/ContentWrapper/ContentWrapper'
import axios from 'axios'
import Video from './Video'
import './Live.css'
import PreLoader from '../Atomics/Preloader/PreLoader'
import VideoCategorySlide from './VideoCategory/VideoCategorySlider'



export class Live extends Component {
  
      state={
        url:'',
        videos:[],
        isloading:false
        
      }
     componentDidMount() {
           
    
       axios.get('https://shop.hoolo.live/api/videos')
       .then(res=>{
      
             this.setState({
            videos:res.data,
            isloading:true,
         })
       })
       .catch(res=>{
         console.log(`this is error from laravel ${res}`)
       })
      }
    
      render() {
        return (
          <>
           {
             this.state.isloading ? (
              <div className="apps">
              <div className='app__videos'>
                 
        
              
                {  
                  this.state.videos.map(({id,title,video,thumbnail,store_name,description,song, likes, messages, shares,store_logo,store_id,products,store_uuid})=>( 
                  
                   <Video 
                   key={id}
                   id={id}
                   url={video}
                   channel={store_name}
                   song={description}
                   likes="200"
                   messages="50"
                   description={description}
                   shares="15"
                   thumbnail={thumbnail}
                   store_logo={store_logo}
                   title={title}
                   video_products={products}
                   uuid={store_uuid}
                   store_id={store_id}
                 
                   />
                 ))
                }
        
                   
           
                
        
             
             
             </div>
            </div>
             ):(<PreLoader/>)
           }
          </>
        )
      }
}

export default Live
