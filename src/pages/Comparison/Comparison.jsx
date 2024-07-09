import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import ComparisonComp from '../../components/Comparison/ComparisonComp';

const Comparison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <ComparisonComp />
  </div>;
};

export default Comparison;
