import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getStore,showFilter } from '../features/AppSlice';
import { showCart } from '../features/CartSlice';
import StoreList from '../components/StoresList/StoreList';
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import Noresult from '../components/loading/Noresult';

function Stores() {
    const {stores,storeLoading,storeSuccess,storeError,searchValue,products} = useSelector((state)=>state.app);
    const dispatch = useDispatch();

    const hideHandler = () =>{
        dispatch(showCart(false));
        dispatch(showFilter(false));
    }

    const retry = () =>{
        dispatch(getStore());
    }

    const storesList = () =>{
        let data = stores;
        if(searchValue){
            data = data.filter(store => store.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }
        return (
            <StoreList stores={data} products={products} />
        );
        
    }

    return (
        <div>
            {storeLoading && <Loader/>}
            {storeError && <Servererror retry={retry} />}
            {storeSuccess && storesList()}
        </div>
    )
}

export default Stores;
