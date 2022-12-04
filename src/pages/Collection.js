import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getCategory } from '../features/AppSlice';
import Categories from '../components/Discover/Categories/Categories';
import '../components/Discover/Categories/Categories.css'
import Loader from '../components/common/Loader';
import Servererror from '../components/loading/Servererror';
import Noresult from '../components/loading/Noresult';
import { Link } from 'react-router-dom';
import xx from '../assets/images/xx.svg'
function Collection() {
    const {categories,catLoading,catSuccess,catError,searchValue} = useSelector((state)=>state.app);
    const dispatch = useDispatch();

    const retry = () =>{
        dispatch(getCategory());
    }

    const collection = () =>{
        let data = categories;
        if(searchValue){
            data = categories.filter(cat => JSON.parse(cat.title).en.toLowerCase().includes(searchValue.toLowerCase()));
        }
        if(data.length<=0){
            return <Noresult/>
        }

        return (
            <Container>
                <Categories category={data}/>
            </Container>
        );
        
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);

    return (
        <div>
            {catLoading && <Loader/>}
            {catError && <Servererror retry={retry} />}
            {catSuccess && collection()}
        </div>
    )
}

export default Collection;
