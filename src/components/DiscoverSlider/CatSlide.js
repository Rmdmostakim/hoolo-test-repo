import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Category from '../Category/Category';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
const CatSlide = () => {
  const {categories,catLoading,catSuccess,catError,searchValue} = useSelector((state)=>state.app);
  return (
    <div>
        <Splide options={ 
            { 
            type   : 'loop',
            fixedWidth : '12rem',
            drag   : 'free',
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
            
                },
                400: {
                perPage: 2,
            
                },
            },
            } } aria-label="React Splide Example">
            {
                categories.map((categories) =>{
                return(
                    <SplideSlide key={Math.random()}>
                        <div>
                            <Category title={categories.title} image={categories.image}/>
                        </div>
                    </SplideSlide> 
                    );
            })
            }
        </Splide>
    </div>
  )
}

export default CatSlide;