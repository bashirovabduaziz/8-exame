import React, { useEffect } from 'react';

const Stock = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Stock</div>;
};

export default Stock;
