import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import NotFaund from './pages/NotFaund';

import { useDispatch, useSelector } from 'react-redux';
import commerce from './libs/commerce';

import { setProducts } from './redux/products/productsSlice';
import { setCategories } from './redux/products/categoriesSlice';
import Product from './pages/Product';


const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const fetchProducts = async () => {
    try {
      const products = await commerce.products.list();
      const categories = await commerce.categories.list();

      // dispatch(setProducts(products || []));
      // dispatch(setCategories(categories || []));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    fetchProducts();
  }, [theme])


  return (

    <div className='App'>
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
    </div>

  )
}

export default App