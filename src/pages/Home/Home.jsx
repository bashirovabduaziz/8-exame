import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import Compleks from '../../components/Complex/Compleks';
import Cureer from '../../components/Cureer/Cureer';
import Products from '../../components/Products/Products';
 

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   
    }, []);

  return (
    <div>
      <Hero  />
      <Categories />
      <Compleks />
      <Cureer />
      <Products />
    </div>
  )
}

export default Home