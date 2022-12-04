import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
const userAuth = () =>{
    const userId = localStorage.getItem('id');
    if(userId){
        return true;
    }
    return false;
}

function ProtectedRoute() {
    const hasAccess = userAuth();
    return hasAccess ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
