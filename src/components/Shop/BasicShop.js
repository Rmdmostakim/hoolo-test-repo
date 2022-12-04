import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shop.css";
import ThinFooter from "../Footer/ThinFooter";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import ShopCart from "./ShopCard";
import Paginate from "../Atomics/Paginate/Paginate";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopCard from "./ShopCard";

function BasicShop() {
  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/allproducts`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(true);
      })
      .catch((res) => {
        console.log(`this is error from laravel ${res}`);
      });

      window.scrollTo({
        top: 0,
    });
    console.log('rendering');
  });

  return (
    <>
        {products.map(
          (product, index) =>
            product.featured == this.props.ProductStatus && (
              <Col xl={2} sm={6} xs={6} className="mb-3" key={product.id}>
                <ShopCard product={product} />
              </Col>
            )
        )}
      </>   
  );
}

export default BasicShop;


// export default class BasicShop extends Component {
//   state = {
//     products: [],
//     isLoading: false,
//   };
//   componentDidMount() {
//     axios
//       .get(`${process.env.REACT_APP_BASE_URL}/allproducts`)
//       .then((res) => {
//         this.setState({
//           products: res.data,
//           isLoading: true,
//         });
//       })
//       .catch((res) => {
//         console.log(`this is error from laravel ${res}`);
//       });
//   }
//   render() {
//     return (
//       <>
//         {this.state.products.map(
//           (product, index) =>
//             product.featured == this.props.ProductStatus && (
//               <Col xl={2} sm={6} xs={6} className="mb-3" key={product.id}>
//                 <ShopCard product={product} />
//               </Col>
//             )
//         )}
//       </>
//     );
//   }
// }
