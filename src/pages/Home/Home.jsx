import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Categories from '../../components/Categories/Categories';
import Compleks from '../../components/Complex/Compleks';
import Cureer from '../../components/Cureer/Cureer';
import Products from '../../components/Products/Products';
import Clients from '../../components/Client/Clients';
import Brands from '../../components/Brands/Brands';
import Info from '../../components/Info/Info';
import News from '../../components/News/News';
import Quetions from '../../components/Quetions/Quetions';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Categories />
      <Compleks />
      <Cureer />
      <Products />
      <Clients />
      <Brands />
      <Info />
      <News />
      <Quetions />
      <Subscribe />
    </div>
  );
};

export default Home;
