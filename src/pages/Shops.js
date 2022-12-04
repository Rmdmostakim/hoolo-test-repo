import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo,showFilter } from '../features/AppSlice';
import { showCart } from '../features/CartSlice';
import ShopTwo from '../components/ShopTwo/Shop';
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import Noresult from '../components/loading/Noresult';

function Shops() {
    const {products,videoLoading,videoError,videoSuccess,searchValue} = useSelector((state)=>state.app);
    const dispatch = useDispatch();

    const hideHandler = () =>{
        dispatch(showCart(false));
        dispatch(showFilter(false));
    }

    const retry = () =>{
        dispatch(getVideo());
    }

    const shops = () =>{
        let data = products;
        if(searchValue){
            data = data.filter( product=>product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
            <ShopTwo products={data} isCategory={true} />
        );
    }

    return (
        <div>
            {videoLoading && <Loader/>}
            {videoError && <Servererror retry={retry} />}
            {videoSuccess && shops()}
        </div>
    )
}

export default Shops;
