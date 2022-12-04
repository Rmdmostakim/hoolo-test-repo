import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Card, Button, Dropdown, Modal, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import BrandSlide from "./BrandSlide";
import ContentWrapper from "../../Atomics/ContentWrapper/ContentWrapper";

function SampleNextArrow(props) {
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

function SamplePrevArrow(props) {
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

 

function BrandSlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const activeStatus = null
    ? "product-card-list active"
    : "product-card-list";
  const categoryClass = false
    ? "video-page text-success-custom"
    : "video-page text-danger-custom";
   
  return (
    <>
        
    <h6 style={{fontSize:'18px', fontWeight:'700'}}>Top Brands</h6>

   <Slider {...settings} className="mb-5 ">
     {
       props.brand.map((brand)=>(
        <BrandSlide key={brand.id} img={brand.image} />
       ))
     }
   </Slider>

</>
  )
}

export default BrandSlider