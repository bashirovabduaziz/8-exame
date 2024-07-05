import { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import AboutUs from '../../components/AboutUs/AboutUs';
import Numbers from '../../components/AboutUs/Numbers';
import Partners from '../../components/AboutUs/Partners';
import Workers from '../../components/AboutUs/Workers';
import Clients from '../../components/Client/Clients';
import Cureer from '../../components/Cureer/Cureer';
import Brands from '../../components/Brands/Brands';
import Quetions from '../../components/Quetions/Quetions';
import Certificates from '../../components/AboutUs/Certificates';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <AboutUs />
    <Numbers />
    <Partners />
    <Workers />
    <Clients />
    <Cureer />
    <Brands />
    <Certificates />
    <Quetions />
  </div>;
};

export default About;
