import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import ContactComp from '../../components/ContactComp/ContantComp';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <ContactComp />
  </div>;
};

export default Contact;
