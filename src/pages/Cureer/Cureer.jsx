import React, { useEffect } from 'react';
import CureerComp from '../../components/Cureer/CureerComp';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import WithOur from '../../components/Cureer/WithOur';
import Subscribe from '../../components/Subscribe/Subscribe';
import Info from '../../components/Info/Info';
import Rules from '../../components/Cureer/Rules';
import CureerMap from '../../components/Cureer/CureerMap';
import CureerInfo from '../../components/Cureer/CureerInfo';
import CureerQuestions from '../../components/Cureer/CureerQuestions';

const Cureer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <CureerComp />
    <WithOur />
    <Rules />
    <Info />
    <CureerMap />
    <CureerInfo />
    <CureerQuestions />
    <Subscribe />
  </div>;
};

export default Cureer;
