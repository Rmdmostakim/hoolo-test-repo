import React from 'react';
import {RiCheckboxBlankLine,RiCheckboxFill} from 'react-icons/ri';
import {FaMinus,FaPlus,FaTrash} from 'react-icons/fa';
import {Button } from "react-bootstrap";
import {increment,decrement,removeCart,selectDeselect} from '../../features/CartSlice';
import { useDispatch } from 'react-redux';
function ProductList(props) {
    const dispatch = useDispatch();
    const {id,name,image,price,qty,select} = props;
    const checkHandler = () => {
        dispatch(selectDeselect(id));
    }
    const incrementHandler = () =>{
        dispatch(increment(id));
    }
    const decrementHandler = () =>{
       dispatch(decrement(id));
    }
    const removeHandler = () =>{
       dispatch(removeCart(id));
    }
    return (
        <div className="listing hr">
            <div>
                <Button variant="none" onClick={checkHandler}>{select === true ?<RiCheckboxFill className='selected'/> : <RiCheckboxBlankLine/>}</Button>
            </div>
            <div className='p-img'>
            <img src={image} alt={name} />
            </div>
            <div className='midsec'>
                <div className="pname">{name}</div>
                <div className="qtyBtn">
                    <div>
                        <Button className='p-m-btn' variant="none" size="sm" onClick={decrementHandler}><FaMinus/></Button>
                    </div>
                    <div className="fbold">{qty}</div>
                    <div>
                        <Button className='p-m-btn' variant="none" size="sm" onClick={incrementHandler}><FaPlus/></Button>
                    </div>
                </div> 
            </div>
            <div className='lstsec'>
                <div className="fbold">
                    Tk. {qty*price}
                </div>
                <div>
                    <Button variant="none" size="sm" className="icons" onClick={removeHandler}><FaTrash/></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductList;