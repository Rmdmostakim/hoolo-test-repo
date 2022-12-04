import React, { useEffect, useState } from "react";
import FatFooter from "../Footer/FatFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import VideoCase from "../Video/VideoCase";
import PreLoader from "../Atomics/Preloader/PreLoader";
import ChildNav from "./ChildNav";
import "./Homepage.css";
import Discovers from "../Discover/Discover";
import Follow from '../Follow/Follow';
function Homepage(props) {
  const [category, setCategory] = useState('trending');
  const CategoryUpdate = (category) => {
    setCategory(category);
  };
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[category]);

  if (!props.isloading) {
    return <PreLoader />;
  }

  return (
    <ContentWrapper>
      <ChildNav category={category} CategoryUpdate={CategoryUpdate.bind(category)}/>


      {
        category==='trending' &&  props.alldetails.map((details, index) => (

          <VideoCase
            searchTerm={props.searchTerm}
            video={details.video}
            history={props.history}
            comments={details.comments}
            likes={details.likes}
            follows={details.follows}
            products={details.products}
            users={details.users}
            category={category}
            key={index}
          />
          
        ))
        || category==='follow' && props.alldetails.map((details, index) => (
      
      
          <Follow
            searchTerm={props.searchTerm}
            video={details.video}
            history={props.history}
            comments={details.comments}
            likes={details.likes}
            follows={details.follows}
            products={details.products}
            users={details.users}
            category={category}
            key={index}
          />
        ))

      }
    </ContentWrapper>
  );
}


 
export default Homepage;