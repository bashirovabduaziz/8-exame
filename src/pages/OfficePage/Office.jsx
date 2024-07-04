import React, { useEffect } from 'react';
import Info from '../../components/Info/Info';
import Quetions from '../../components/Quetions/Quetions';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import OfficeComp from '../../components/OfficeComp/OfficeComp';
import TapChanger from '../../components/OfficeComp/TapChanger';

const Office = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <OfficeComp />
    <TapChanger />
    <Info />
    <Quetions />
  </div>;
};

export default Office;
