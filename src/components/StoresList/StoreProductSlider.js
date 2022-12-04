import React,{useEffect, useState} from 'react';
import StoreProductSlide from './StoreProSlide';
import {Container,Row,Col} from 'react-bootstrap';
import './StoreList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleLeft,faCircle} from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from '@splidejs/react-splide';

function storePro(props) {
  const {product} = props;
    return (
      <div className='StoreProDiv mb-2 mt-2'>
        <Splide options={ 
        { rewind: true,
          fixedWidth : '12rem',
          drag   : 'free',
          type:'loop',
          arrows: false,
          snap: true,
          pagination: false,
          perPage: 5,
          gap: '1em',
          cover: true,
          breakpoints: {
            1024: {
              perPage: 4,
             
            },
            640: {
              fixedWidth : '10em',
          
            },
          },
        } } aria-label="React Splide Example">
            {     
              product.map((pro)=>{
                  return(
                    <SplideSlide key={Math.random()}>
                      <div key={Math.random()} className='storeProCard'>
                        <StoreProductSlide className='proCard'  img={pro.cover} offer_price={pro.offer_price} price={pro.unit_price}  slug={pro.slug} />
                      </div>
                    </SplideSlide>
                    );
              })
                  
            }
        
        </Splide>
      </div>
  )
}

export default storePro;