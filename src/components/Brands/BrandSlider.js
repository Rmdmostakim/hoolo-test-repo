import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Brand.css'
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Brands from './Brands';
const BrandSlide = () => {
    const {brands} = useSelector(state=>state.app);
  return (
    <div>
        <Splide options={ 
            { 
            drag   : 'free',
            fixedWidth : '192px',
            fixedHeight : '180px',
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
                perPage: 3,
                fixedWidth : '10em',
                fixedHeight : '110px',
            
                },
                400: {
                perPage: 2,
            
                },
            },
            } }>
            {
                
                brands && brands.map((brands)=>{
                return(
                    <SplideSlide key={Math.random()}>
                        <Brands image={brands.image} id={brands.id}/>
                    </SplideSlide> 
                    );
            })
            }
        </Splide>
    </div>
  )
}

export default BrandSlide;