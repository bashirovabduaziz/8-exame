import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import GuaranteComp from '../../components/GuaranteComp/GuaranteComp';
import Cureer from '../../components/Cureer/Cureer';
import GuaranteComp2 from '../../components/GuaranteComp/GuaranteComp2';
import Quetions from '../../components/Quetions/Quetions';

const Guarantees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <GuaranteComp />
    <Cureer />
    <GuaranteComp2 />
    <Quetions />
  </div>;
};

export default Guarantees;
