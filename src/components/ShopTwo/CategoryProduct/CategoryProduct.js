import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './CategoryProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../common/Loader';
import { getVideo } from '../../../features/AppSlice';
import ShopTwo from '../Shop';
import Servererror from '../../loading/Servererror';
import Nocat from '../../loading/Nocat';
import Noresult from '../../loading/Noresult';

const CategoryProduct = (props) => {
  const { name } = useParams();
  const {products,videoLoading,videoSuccess,videoError,searchValue} = useSelector((state)=>state.app);
  const dispatch = useDispatch();

  const retry = () =>{
    dispatch(getVideo());
  }
  
  const category = () =>{
    let data = products.filter(product=>product.category.title.en.trim().replace(/ /g, "-").toLowerCase() === name);
    if(data.length <=0){
      return <Nocat/>
    }
    if(searchValue){
        data = data.filter( product=>product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    if(data.length<=0){
        return <Noresult/>
    }
    
    return (
      <>
          <Container fluid>
            <ShopTwo products={data} title={name.replace('-', " ").toUpperCase()} isCategory={true} />
          </Container>
        </>
    );
  }

  return (
    <>
      {videoLoading && <Loader/>}
      {videoError && <Servererror retry={retry}/>}
      {videoSuccess && category()}
    </>
  );
}

export default CategoryProduct; 