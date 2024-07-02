import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import Wishes from '../../components/Wishes/Wishes';
import React, { useEffect } from 'react';

const Wishlist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <Wishes />
    </div>
  );
};

export default Wishlist;
