import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shop.css";
import axios from "axios";
import VideoShopCart from "./VideoShopCard";

class VideoShop extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/allproducts`)
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });
  }
  render() {
    return (
      <>
        {this.state.products.map(
          (product) =>
            this.props.store_uuid === product.store_uuid && (
              <Col xl={3} sm={3} xs={6} className="mb-3" key={product.id}>
                <VideoShopCart product={product} />
              </Col>
            )
        )}
      </>
    );
  }
}

export default VideoShop;
