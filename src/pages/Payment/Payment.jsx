import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import Quetions from '../../components/Quetions/Quetions';
import PaymentComp from '../../components/PaymentComp/PaymentComp';

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <PaymentComp />
    <Quetions />
  </div>;
};

export default Payment;
