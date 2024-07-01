import React, { useEffect } from 'react'
import Catalogs from '../../components/Catalogs/Catalogs';
import Compleks from '../../components/Complex/Compleks';
import Cureer from '../../components/Cureer/Cureer';
import Products from '../../components/Products/Products';
import Brands from '../../components/Brands/Brands';
import News from '../../components/News/News';

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   
    }, []);

  return (
    <div>
      <Catalogs />
      <Compleks />
      <Cureer />
      <Products />
      <Brands />
      <News />
    </div>
  )
}

export default Catalog