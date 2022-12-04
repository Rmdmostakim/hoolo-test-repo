import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shop.css";
import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";
import Paginate from "../Atomics/Paginate/Paginate";
import BasicShop from "./BasicShop";
import PreLoader from "../Atomics/Preloader/PreLoader";
import TopCategoriesSlider from "../Homepage/TopCategoriesSlider";
import ShopSectionHeader from "./ShopSectionHeader/SectionHeader";
import ShopCategoriesSlider from "./TopCategory/ShopCategoriesSlider";

// const ProductsCards = () => {

//   return (
//     <>

//       <div className="video-block section-padding">
//         <Row>

//           <Col md={12} className="pb-5">
//             <Row>

//               <Col sm={12} md={6}   lg={4} xl={3} className="mb-2">
//                 <div className="card-category-item mt-0 mb-0 cardBoder"  >
//                   <div className="d-flex px-1">
//                     <div>
//                       <img src="img/fashion.png" alt="hulusthul" className="imgStyle" />
//                     </div>

//                     <div className="px-2 list">
//                       <h5> Fashion & Life Style </h5>
//                       <ul>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/fashion/wearable-accessories/" >Fashion Accessories</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/fashion/bags/">Bags</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/fashion/kids/">Kid’s Fashion</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/fashion/mens/">Mens</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/fashion/woman/">Women</a>
//                         </li>

//                       </ul>
//                     </div>

//                   </div>

//                 </div>
//               </Col>

//               <Col sm={12} md={6}   lg={4} xl={3}  className="mb-2">
//                 <div className="card-category-item mt-0 mb-0 cardBoder">
//                   <div className="d-flex px-1">
//                     <div>
//                       <img src="img/electrical.png" alt="hulusthul" className="imgStyle" />
//                     </div>

//                     <div className="px-2 list">
//                       <h5> Electronic Accessories  </h5>
//                       <ul>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/elecrtronic/desktop/"> Desktop PC </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/elecrtronic/laptop/"> Laptop </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/elecrtronic/mobile-phone/">Smartphones</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/elecrtronic/electronic-accessories/">Electronic Tools</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/elecrtronic/headphones/">Headphone</a>
//                         </li>

//                       </ul>
//                     </div>

//                   </div>

//                 </div>
//               </Col>

//               <Col sm={12} md={6}  lg={4} xl={3}  className="mb-2">
//                 <div className="card-category-item  mt-0 mb-0 cardBoder">
//                   <div className="d-flex px-1">
//                     <div>
//                       <img src="img/beauty.png" alt="hulusthul" className="imgStyle" />
//                     </div>

//                     <div className="px-2 list">
//                       <h5> Health & Beauty </h5>
//                       <ul>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/beauty-products/cream/"> Firming Cream </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/beauty-products/serum/">   Serum </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/beauty-products/mask/">  Facial Mask </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/beauty-products/night-cream/">  Night Cream  </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/beauty-products/woman-care/">  Women Care</a>
//                         </li>

//                       </ul>
//                     </div>

//                   </div>

//                 </div>
//               </Col>

//               <Col sm={12} md={6}   lg={4} xl={3}  className="mb-2" >
//                 <div className="card-category-item mt-0 mb-0 cardBoder">
//                   <div className="d-flex px-1">
//                     <div>
//                       <img src="img/kitchen.png" alt="hulusthul" className="imgStyle" />
//                     </div>

//                     <div className="px-2 list">
//                       <h5> Garden & Kitchen </h5>
//                       <ul>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/indoor/furniture/"> Furniture </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/indoor/cooker/">Rice Cooker</a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/indoor/racks/">  Racks  </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/indoor/furniture/">  Furniture  </a>
//                         </li>
//                         <li className="py-1">
//                           <strong className="mr-2">-</strong><a style={{color:'black', fontWeight:'600'}} href="https://hulusthul.live/product-category/indoor/gardens/"> Gardening  </a>
//                         </li>

//                       </ul>
//                     </div>

//                   </div>

//                 </div>
//   </Col>

//             </Row>
//           </Col>
//         </Row>

//       </div>

//     </>
//   );
// };

export class Shop extends Component {
  state = {
    isloading: false,
    ProductType: "New Arrrivals",
    ProductStatus: 0,
  };
  componentDidMount() {
    this.setState({
      isloading: true,
    });
  }
  ProductTypeUpdate(type) {
    this.setState({
      ProductType: type,
      ProductStatus:
        (type == "Featured" && 1) || (type == "New Arrrivals" && 0),
    });
  }

  render() {
    return (
      <div>
        {this.state.isloading ? (
          <ContentWrapper>
            <Container fluid className="shopContainer">
              <div className="video-block section-padding">
                <Row>
                  <Col md={12} className="mb-2">
                    <ShopCategoriesSlider />
                  </Col>

                  <Col md={12}>
                    <ShopSectionHeader
                      heading={this.state.ProductType}
                      ProductType={this.ProductTypeUpdate.bind(this)}
                    />
                  </Col>

                  <BasicShop ProductStatus={this.state.ProductStatus} />
                </Row>
              </div>
              <Paginate />
            </Container>
            <ThinFooter />
          </ContentWrapper>
        ) : (
          <PreLoader />
        )}
      </div>
    );
  }
}

export default Shop;
