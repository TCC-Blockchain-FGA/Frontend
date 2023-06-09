import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  let isAuthenticated = false;
  if(token !== null && token !== '')
    isAuthenticated = true;
  else {
    localStorage.setItem('token', '');
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
