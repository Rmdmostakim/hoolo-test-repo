import { useEffect, useState } from "react";
import "./shop.css";

const VideoShopCart = (props) => {
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
  } = props.product;

  return (
    <>
      <div className="card-category-item mt-0 mb-0">
        <a href={`https://shop.hoolo.live/products/${id}/${slug}`}>
          <img
            key={id}
            className="img-fluid"
            style={{ width: "80px", height: "80px" }}
            src={`https://shop.hoolo.live/images/simple_products/${thumbnail}`}
            alt={product_name.en}
          />

          <h5> {product_name.en} </h5>

          <h6>
            {offer_price == 0 ? (
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
        </a>
      </div>
    </>
  );
};
export default VideoShopCart;
