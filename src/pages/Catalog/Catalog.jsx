import React, { useEffect } from 'react'
import Catalogs from '../../components/Catalogs/Catalogs';

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   
    }, []);

  return (
    <div>
      <Catalogs />
    </div>
  )
}

export default Catalog