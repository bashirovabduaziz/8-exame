import React, { useEffect } from 'react'
import { productData } from '../../static/data';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find(item => item.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [id]);

  return (
    <div><img src={product.img} alt="" /></div>
  )
}

export default SinglePage