import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "../ShopTwo/Products/ProductSlide.css";



const VendorProducts=(props)=> {
  return (
   <>
    <Row>
          {props.alldetails[0].products.map(
            (product, index) =>
              product.store_uuid == props.store_uuid && (
                <Col xl={3} sm={6} xs={6} className="mb-3" key={index}>
                  <div className="vendor-product-slide-item">
                    <Link to={`/product-details/${product.id}/${product.category_id}/${product.product_name}`}>

                      <div className={product.offer_price == null ? "product_tag_none" : "product_tag"}>
                        {Math.round(
                          ((product.price - product.offer_price) /
                            product.price) *
                          100
                        )}          % off</div>

                      <img
                        src={`https://shop.hoolo.live/images/simple_products/${product.thumbnail}`}
                        alt={product.product_name}
                      />

                    </Link>

                    <div className="product_title"> <Link to={`/product-details/${product.id}/${product.category_id}/${JSON.parse(product.product_name).en}`}>   {JSON.parse(product.product_name).en}    </Link>  <FontAwesomeIcon className="bookmark" icon={faBookmark} />  </div>

                    <div className="price">
                      {product.offer_price == null ? (
                        <span>{`৳ ${product.price}`} </span>
                      ) : (
                        <span>
                          {" "}
                          <strong> {`৳ ${product.offer_price} `} </strong>{" "}
                          <strong style={{ textDecoration: "line-through" }}>
                            {" "}
                            {`৳ ${product.price}`}
                          </strong>{" "}
                        </span>
                      )}
                    </div>

                  </div>
                </Col>
              )
          )}
        </Row>
   </>
  )
}

export default VendorProducts;
