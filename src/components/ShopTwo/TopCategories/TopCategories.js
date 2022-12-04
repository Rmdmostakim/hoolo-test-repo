import { Button } from 'react-bootstrap';
import Classes from './TopCategories.module.css';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md';
import React,{ useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

function TopCategories() {
	const {categories} = useSelector((state)=>state.app);
	const [show,setShow] = useState(false);
	const handleShow = () =>{
		setShow(!show);
	}
	const location = useLocation();
	useEffect(()=>{
		setShow(false);
	},[location]);
	return (
		<div className={Classes.container}>
			<div className={Classes.btnBox}>
				<div className={Classes.catBtn} onClick={handleShow}>
					<Button size="sm" variant="none">Categories {show ? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</Button>
				</div>
			</div>
			<div className={show ? Classes.catBox: null}>
				{show && categories.map((cat)=>{
					return (
						<div className={Classes.catContainer} key={cat.id}>
							<div className='cat_div'>
								<Link to={`/categories/${(JSON.parse(cat.title).en).trim().replace(/ /g, "-").toLowerCase()}`}>
									<img className={Classes.catImg} src={`https://shop.hoolo.live/images/category/${cat.image}`} alt="cat"/>
									{JSON.parse(cat.title).en}
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default TopCategories

 

 