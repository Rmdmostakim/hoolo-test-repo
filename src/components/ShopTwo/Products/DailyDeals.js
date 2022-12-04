import React from 'react';
import ProductSlide from './ProductSlide';
import {Container,Row,Col} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function DailyDeals(props) {
  const {product} = props;
  const location = useLocation();
  if(location.pathname.includes('products')){
    return (
      <Container style={{marginTop:'4rem'}}>
        <Row className='justify-content-center'  style={{paddingInline:'2px'}}>
          {
            product.map((pro)=>{
              if(Number(pro.featured) === 1){
                return(
                  <Col className='pro-card' md={3} sm={4} xs={6} key={pro.id}>
                    <ProductSlide  img={pro.cover} offer_price={pro.offer_price} price={pro.unit_price} product_name={pro.product_name}  slug={pro.slug} />
                  </Col> 
                );
              }
              return null;
            })
          }
          {
            product.map((pro)=>{
              if(Number(pro.featured) === 0){
                return(
                  <Col className='pro-card' md={3} sm={4} xs={6} key={pro.id}>
                    <ProductSlide  img={pro.cover} offer_price={pro.offer_price} price={pro.unit_price} product_name={pro.product_name}  slug={pro.slug} />
                  </Col> 
                );
              }
              return null;
            })
          }
        </Row>
      </Container>
    )
  }
  return (
    <Container style={{ marginTop:'8px' }}>
      <Row className='justify-content-center'  style={{paddingInline:'2px'}}>
        {
          product.map((pro)=>{
            if(Number(pro.featured) === 1){
              return(
                <Col className='pro-card' md={3} sm={4} xs={6} key={pro.id}>
                  <ProductSlide  img={pro.cover} offer_price={pro.offer_price} price={pro.unit_price} product_name={pro.product_name}  slug={pro.slug} />
                </Col> 
              );
            }
            return null;
          })
        }
        {
          product.map((pro)=>{
            if(Number(pro.featured) === 0){
              return(
                <Col className='pro-card' md={3} sm={4} xs={6} key={pro.id}>
                  <ProductSlide  img={pro.cover} offer_price={pro.offer_price} price={pro.unit_price} product_name={pro.product_name}  slug={pro.slug} />
                </Col> 
              );
            }
            return null;
          })
        }
    </Row>
    </Container>
  )
}

export default DailyDeals;