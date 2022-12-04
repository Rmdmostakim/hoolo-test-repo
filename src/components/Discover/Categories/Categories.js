import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import './Categories.css'
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';

const Categories = () => {
  const {categories,catLoading,catSuccess,catError,searchValue} = useSelector((state)=>state.app);
  return (
    <div>

      <Row className='mb-5'>
        {
          categories.map((category, index) => {
            if(category.id === 1 || category.id === 5){
              return(
                (
                  <Col xl={3} md={4} xs={6} className='cat-card' key={index}>
                    <Category title={category.title} image={category.image}/>
                  </Col>
                )
              );
            }
            return null;
          })
        }
        {
          categories.map((category, index) => {
            if(category.id !== 19 && category.id !== 17 && category.id !== 7 && category.id !== 2 && category.id !== 1 && category.id !== 5 ){
              return(
                (
                  <Col xl={3} md={4} xs={6} className='cat-card' key={index}>
                    <Category title={category.title} image={category.image}/>
                  </Col>
                )
              );
            }
            return null;
          })
        }

      </Row>
    </div>
  )
}

export default Categories;