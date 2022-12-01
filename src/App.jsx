import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import NotFaund from './pages/NotFaund';

import { useDispatch, useSelector } from 'react-redux';
import Product from './pages/Product';
import { NotificationState } from './context/notification/NotificationState';


const App = () => {
  const { theme }  = useSelector(state => state.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
    
    <div className='App'>
      <NotificationState>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/category/' element={<Category />} />
            <Route path='/category/:categorySlug' element={<Category />} />
            <Route path='/category/:categorySlug/:permalink' element={<Product />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFaund />} />
          </Routes>
        </Router>
      </NotificationState>
    </div>

  )
}

export default App