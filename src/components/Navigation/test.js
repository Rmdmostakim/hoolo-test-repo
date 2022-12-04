import React from 'react';
import Classes from './mobilemenu.module.css';
import './Glow.css';
import {Link,NavLink, useLocation} from 'react-router-dom';
import store from './icons/store.svg';
import shop from './icons/shop.svg';
import profile from './icons/profile.svg';
import live from './icons/live.svg';
import home from './icons/home.svg';
function Mobilenav() {
    const {pathname:url} = useLocation();
    return (
        <div className={Classes.menuContainer}>
            <div className={Classes.menuBox}>
                    <ul className='glow'>
                        <li className='liglow'>
                            <a className='aglow' href="#">
                            <iconify-icon icon="carbon:home"></iconify-icon>
                            </a>
                        </li>
                        <li className='liglow'>
                            <a className='aglow' href="#">
                            <iconify-icon icon="bi:bag-dash"></iconify-icon>
                            </a>
                            </li>
                        <li className='liglow'>
                            <a className='aglow' href="#">
                            <iconify-icon icon="clarity:store-line"></iconify-icon>
                            </a>
                            
                        </li>
                        <li className='liglow'>
                            <a className='aglow' href="#">
                            <iconify-icon icon="heroicons:video-camera"></iconify-icon>
                            </a> 
                        </li>
                            <li className='liglow'>
                            <a className='aglow' href="#">
                            <iconify-icon icon="bx:user"></iconify-icon>
                            </a> 
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Mobilenav;
