import React, { useEffect } from 'react';
import CureerComp from '../../components/Cureer/CureerComp';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import WithOur from '../../components/Cureer/WithOur';
import Subscribe from '../../components/Subscribe/Subscribe';
import Info from '../../components/Info/Info';

const Cureer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <CureerComp />
    <WithOur />
    <Info />
    <Subscribe />
  </div>;
};

export default Cureer;
