import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Load from '../components/loading/load';
import ShopTwo from '../components/ShopTwo/Shop';
export default function Brand() {
    const {products,searchValue,brands} = useSelector(state=>state.app);
    const { id } = useParams();
    const filterBrand = () =>{
        let data = products;
        data = data.filter(product => (product.brand_id === Number(id)));
        if(searchValue){
            data = data.filter(product => product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        return <ShopTwo products={data} brand={brands} />
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);

    return (
        <div>
            {!products && <Load/>}
            {products && filterBrand()}
        </div>
    );
}
