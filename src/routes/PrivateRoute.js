import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
const userAuth = () =>{
    const userId = localStorage.getItem('id');
    if(userId){
        return true;
    }
    return false;
}

function PrivateRoute() {
    const hasAccess = userAuth();
    return hasAccess ? <Navigate to="/"/> : <Outlet/>;
}

export default PrivateRoute;
