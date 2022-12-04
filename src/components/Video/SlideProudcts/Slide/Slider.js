import React, { Component } from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { Card, Button, Dropdown, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Slide from "./Slide";

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

export class ModalProductDetails extends Component {
  state = {
    showDetails: false,
  };

  render() {
    const settings = {
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
            slidesToShow: 1,
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
    const categoryClass = false
      ? "video-page text-success-custom"
      : "video-page text-danger-custom";

    return (
      <>
        <Slider {...settings} className="slides">
          {this.props.productsDetails.productGallery.map((productGallery) => (
            <Slide productGallery={productGallery} />
          ))}
        </Slider>
      </>
    );
  }
}

export default ModalProductDetails;
