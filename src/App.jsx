// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Brands from './pages/Brands/Brands';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Category from './pages/Category/Category';
import Certificates from './pages/Certificates/Certificates';
import Comparison from './pages/Comparison/Comparison';
import Contact from './pages/Contact/Contact';
import Cureer from './pages/Cureer/Cureer';
import Faq from './pages/FAQ/Faq';
import Guarantees from './pages/Guarantees/Guarantees';
import Manufactures from './pages/Manufacturers/Manufactures';
import Office from './pages/OfficePage/Office';
import Payment from './pages/Payment/Payment';
import Personal from './pages/Personal/Personal';
import Reviews from './pages/Reviews/Reviews';
import Services from './pages/Services/Services';
import Stock from './pages/Stock/Stock';
import Vacancies from './pages/Vacancies/Vacancies';
import Wishlist from './pages/Wishlist/Wishlist';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import useRouteChange from './hooks/useRouteChange';

const App = () => {
  const loading = useRouteChange();

  return (
    <>
      <div className='bg-[#F8F7F3]'>
        {loading && <Loading />}
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/single-product/:id' element={<SinglePage />} />
            <Route path='/article' element={<Article />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/category' element={<Category />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/comparison' element={<Comparison />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cureer' element={<Cureer />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/guarantees' element={<Guarantees />} />
            <Route path='/manufactures' element={<Manufactures />} />
            <Route path='/office' element={<Office />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/personal' element={<Personal />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/services' element={<Services />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/vacancies' element={<Vacancies />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
