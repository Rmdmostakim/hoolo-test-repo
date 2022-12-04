import React from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Noresult from '../components/loading/Noresult';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Load from '../components/loading/load';
import Nopro from '../components/loading/Nopro';
import { Container } from 'react-bootstrap';
import ShopTwo from '../components/ShopTwo/Shop';
function Campaigns() {
    const { slug } = useParams();
    const {searchValue} = useSelector((state)=>state.app);
    const [isLoading,setisLoading] = useState(true);
    const [products,setProducts] = useState(null);
    useEffect(()=>{
        axios.get(`https://shop.hoolo.live/api/campaigns/${slug}`)
        .then((res)=>{
            setProducts(res.data);
            setisLoading(false);
        })
        .catch(()=>{
            setProducts(null);
            setisLoading(false);
        });
    });
    
    const productview = () =>{
        let data = products;
        if(!data){
            return <Nopro/>
        }
        if(searchValue){
            data = data.filter( product=>product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return <ShopTwo products={data} title={slug.replace('-', " ").toUpperCase()} isCategory={false} />
    }

    return(
        <Container className='mt-5'>
            <div className='mt-5'>
            {isLoading && <Load/>}
                {!isLoading && productview()}
            </div>
        </Container>
    );
}

export default Campaigns;
