import React from 'react';
import Classes from './mobilemenu.module.css';
import {Link,NavLink, useLocation} from 'react-router-dom';
function Mobilenav() {
    const {pathname:url} = useLocation();
    return (
        <div className={Classes.menuContainer}>
            <div className={Classes.menuBox}>
                <div className={Classes.menuItem}>
                    <NavLink to="/">
                        <div className={url === '/' || url === '/following' || url === '/discover' ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="carbon:home"></iconify-icon>
                        </div>
                        <div className={url === '/' || url === '/following' || url === '/discover' ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Home</small>
                        </div>
                    </NavLink>
                </div>
                <div className={Classes.menuItem}>
                    <Link to="/store">
                        <div className={url === '/store' ||  url.includes('/vendors') ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                         
                        <iconify-icon icon="clarity:store-line"></iconify-icon>   
                        </div>
                        <div className={url === '/store'|| url.includes('/vendors') ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Stores</small>
                        </div>
                    </Link>
                </div>
                <div className={Classes.menuItem}>
                    <NavLink to="/collection">
                        <div className={url === '/collection'|| url.includes('/shop') || url.includes('/categories')  ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="bi:collection"></iconify-icon>
                        </div>
                        <div className={url === '/collection'|| url.includes('/shop')|| url.includes('/categories')  ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Collection</small>
                        </div>
                    </NavLink>
                </div>
                <div className={Classes.menuItem}>
                    <NavLink to="/my-account">
                        <div className={url === '/my-account' ? Classes.menuIcon+' '+Classes.menuIcon_active :Classes.menuIcon}>
                        <iconify-icon icon="clarity:user-line"></iconify-icon>
                        </div>
                        <div className={url === '/my-account' ? Classes.menuText+' '+Classes.menuText_active : Classes.menuText}>
                            <small>Profile</small>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Mobilenav;