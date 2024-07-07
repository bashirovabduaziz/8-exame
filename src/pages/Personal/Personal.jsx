import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import PersonalComp from '../../components/PersonalComp/PersonalComp';

const Personal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <PersonalComp />
  </div>;
};

export default Personal;
