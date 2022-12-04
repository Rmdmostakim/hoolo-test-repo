import React from 'react';
import {ImSearch,ImCross} from 'react-icons/im';
import Classes from  './searchbar.module.css';
import { clearFilter, filter, showFilter } from "../../features/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import search from './icons/search.svg';

function Searchbar() {
    const {searchValue,showSearch} = useSelector((state)=>state.app);
    const dispatch = useDispatch();
    const serachHandler = (event) =>{
		const {value} = event.target;
		dispatch(filter(value));
	}
    const showhandler = () =>{
        dispatch(showFilter(true));
    }
    const clearHandler = () =>{
        dispatch(clearFilter());
    }

    return (
        <div className={Classes.box}>
            {showSearch && (
                <div className={Classes.searchArea}>
                    <div>
                        <input type="text" placeholder="Search" value={searchValue} onChange={serachHandler} />
                    </div>
                    <div className={Classes.clearBtn} onClick={clearHandler}>
                        <ImCross/>
                    </div>
                </div>
            )}
            {!showSearch && (
                <div>
                    <img src={search} alt="search" onClick={showhandler}/>
                </div>
            )}
        </div>
    )
}

export default Searchbar;
