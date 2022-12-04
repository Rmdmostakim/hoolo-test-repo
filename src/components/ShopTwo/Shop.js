import React,{useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./shop.css";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import TopCategories from "./TopCategories/TopCategories";
import DailyDeals from "./Products/DailyDeals";
import SingleHeader from '../Atomics/SectionHeader/SingleSectionHeader';

function Shop(props) {
  const {products,title,category,isCategory} = props;
  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
  },[]);

  return (
    <div>
      {isCategory && <TopCategories category={category} />}
      {title && <SingleHeader heading={title} />}
      <div>
        <div className="mb-5">
          <DailyDeals product={products} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
