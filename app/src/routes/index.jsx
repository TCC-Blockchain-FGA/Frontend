import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './protectedRoutes';

import Home from '../pages/Home';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route exact path='/user' element={<PrivateRoute/>}>
          <Route exact path='/user' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default AppRoutes;
