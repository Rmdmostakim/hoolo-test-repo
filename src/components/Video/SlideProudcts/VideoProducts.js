import React from "react";
import {  Link,  } from "react-router-dom";
import Slider from "react-slick";
import "../Video.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle} from "@fortawesome/free-solid-svg-icons";


const SampleNextArrow=(props)=> {
  return (
    <button
      className="custom-slick-btn custom-slick-next"
      onClick={props.onClick}
    >
      <span>
        <FontAwesomeIcon
          icon={faAngleRight}
          mask={faCircle}
          transform="shrink-7"
        />
      </span>
    </button>
  );
}

const SamplePrevArrow=(props)=> {
  return (
    <button
      className="custom-slick-btn custom-slick-prev"
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        mask={faCircle}
        transform="shrink-7"
      />
    </button>
  );
}


const VideoProducts=(props)=> {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1 ,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const activeStatus = null
    ? "product-card-list active"
    : "product-card-list";
    
  const {products,videoProducts} = props;
  return (
    <Slider {...settings} className="slides">
      {
        products.map((product)=>{
          const {id,product_name,unit_price,images,slug} = product;
          if(videoProducts.includes(String(id))){
            return (
              <div className={activeStatus} key={Math.random()}>
                <Link to={`/products/${slug}`}>
                  <div className="proSlider">
                    <div className="product-card-image">
                      <img
                        className="img-fluid"
                        src={images[0].image}
                        referrerPolicy="no-referrer"
                        alt={product_name}
                        style={{ height: "50px",border:'1px solid #6c757d'}}
                      />
                    </div>
                    <div className="product-card-body">
                      <div className="product-title" style={{color:'black'}}>
                        {product_name}
                      </div>
                      <div className="price">
                        ৳ {unit_price}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
          return null;
        })
      }
    </Slider>
  );
}

export default VideoProducts;