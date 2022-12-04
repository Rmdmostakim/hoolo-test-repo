import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Classes from './linkmenu.module.css';

export default function Linkmenu() {
    const location = useLocation();
    return (
        <div className={`${Classes.links} ${Classes.linkmenu_links}`}>
            <div>
                <NavLink
                    to="/following"
                    className={location.pathname === '/following' ? Classes.active : '' }>
                    Following
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className={location.pathname === '/' ? Classes.active : '' }>
                    Trending
                </NavLink>  
            </div>
            <div>
                <NavLink
                    to="/discover"
                    className={({ isActive }) => (isActive ? Classes.active : '')}
                >
                    Discover
                </NavLink>
            </div>
           
        </div>
    );
}