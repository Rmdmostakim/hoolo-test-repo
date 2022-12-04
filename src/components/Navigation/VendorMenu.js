import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Classes from './linkmenu.module.css';
function VendorMenu({uuid}) {
    const location = useLocation();
    return (
        <div className={Classes.links}>
            <div>
                <Link
                    to={`/vendors/videos/${uuid}`}
                    className={location.pathname.includes('products') ? null : Classes.active}
                >
                    Videos
                </Link>
            </div>
            <div>
                <Link to={`/vendors/products/${uuid}`} className={location.pathname.includes('products') ? Classes.active : null}>
                    Products
                </Link>  
            </div>
        </div>
    )
}

export default VendorMenu;
