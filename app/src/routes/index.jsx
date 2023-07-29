import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './protectedRoutes';

import Home from '../pages/Home';
import RegisterUser from '../pages/RegisterUser';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import BusinessProfile from '../pages/BusinessProfile';
import Historic from '../pages/Historic';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/registerUser" element={<RegisterUser/>} />

        <Route exact path='/userProfile' element={<PrivateRoute/>}>
          <Route exact path='/userProfile' element={<UserProfile/>}/>
        </Route>
        <Route exact path='/businessProfile' element={<PrivateRoute/>}>
          <Route exact path='/businessProfile' element={<BusinessProfile/>}/>
        </Route>
        <Route exact path='/historic' element={<PrivateRoute/>}>
          <Route exact path='/historic' element={<Historic/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default AppRoutes;
