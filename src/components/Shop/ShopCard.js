import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./shop.css";
import axios from "axios";

export class ShopCard extends Component {
  state = {
    views: [],
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/views/${this.props.product.id}`)
      .then((res) => {
        this.setState({
          views: [res.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const {
      id,
      product_name,
      slug,
      product_detail,
      product_tags,
      price,
      offer_price,
      tax,
      tax_rate,
      thumbnail,
      hover_thumbnail,
      stock,
      store_id,
      category_id,
      free_shipping,
      sku,
      permalink,
    } = this.props.product;

    return (
      <>
        <div className="card-category-item mt-0 mb-0">
          <a href={`https://shop.hoolo.live/products/${id}/${slug}`}>
            <img
              key={id}
              className="img-fluid"
              src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`}
              alt={slug}
            />

            {/*<h5 dangerouslySetInnerHTML={{ __html: JSON.parse(product_detail).en }} /> */}

            <h5>{product_name.en} </h5>
            <h6>
              {" "}
              {this.state.views.map((e) => (
                <>
                  <FontAwesomeIcon icon={faEye} /> {e.view_count}
                </>
              ))}{" "}
            </h6>
            <h6>
              {offer_price == null ? (
                <span>{`৳ ${price}`} </span>
              ) : (
                <span>
                  {" "}
                  <strong> {`৳ ${offer_price} `} </strong>{" "}
                  <strong style={{ textDecoration: "line-through" }}>
                    {" "}
                    {`৳ ${price}`}
                  </strong>{" "}
                </span>
              )}
            </h6>

            {/* <button className="btn btn-sm" style={{backgroundColor:'#262626',color:'white', borderRadius:'10px'}}>Shop Now</button> */}
          </a>
        </div>
      </>
    );
  }
}

export default ShopCard;
