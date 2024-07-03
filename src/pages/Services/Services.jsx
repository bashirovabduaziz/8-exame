import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import Numbers from '../../components/AboutUs/Numbers';
import Certificates from '../../components/AboutUs/Certificates';
import Quetions from '../../components/Quetions/Quetions';
import ServicesComp from '../../components/Services/ServicesComp';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <ServicesComp />
    <Numbers />
    <Certificates />
    <Quetions />
  </div>;
};

export default Services;
