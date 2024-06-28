import React, { useState, useEffect } from 'react'
import { productData } from '../../static/data';
import { useParams } from 'react-router-dom';
import { IoBarChartOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';

const SinglePage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find(item => item.id === productId);
  const dispatch = useDispatch();
  const wishes = useSelector(state => state.wishlist.value);
  
  const [mainImg, setMainImg] = useState(product.img);
  const [thumbnails, setThumbnails] = useState([product.imgg, product.img2, product.img3]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMainImg(product.img);
    setThumbnails([product.imgg, product.img2, product.img3]);
  }, [id, product.img, product.imgg, product.img2, product.img3]);

  const handleThumbnailClick = (index) => {
    const newThumbnails = [...thumbnails];
    const clickedImage = newThumbnails[index];
    newThumbnails[index] = mainImg;
    setMainImg(clickedImage);
    setThumbnails(newThumbnails);
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Акции':
        return 'border border-red-500 rounded-full p-[3px] text-red-500 ';
      case 'Новинки':
        return 'border border-green-500 rounded-full p-[3px] text-green-500 ';
      case 'Хиты продаж':
        return 'border border-blue-500 rounded-full p-[3px] text-blue-500';
      default:
        return '';
    }
  };

  return (
    <div className='mx-auto max-w-[1300px] px-5'>
      <div className='flex flex-col gap-[15px] sm:gap-5 md:gap-[60px] md:flex-row md:justify-between py-[50px]  '>
        <div className='lg:max-w-[700px] md:w-[600px] max-w-[360px] lg:h-[510px] md:h-[400px] h-[380px] bg-white border border-[#E5E2EE] rounded-xl'>
          <div className='md:max-w-[550px] md:ml-[10px]  max-w-[360px]  flex md:justify-between justify-between  lg:ml-[30px] mt-[15px] items-center'>
          <p className={` ${getCategoryClass(product.category)}  text-[12px] lg:text-[20px] md:text-[18px]` }>{product.category}</p>
         <div className='flex sm:mr-[15px]'>
         <button onClick={() => dispatch(toggleToWishes(product))} className='lg:mr-[20px] mr-[10px] '> {
                        wishes.some(w => w.id === product.id) ?
                            <IoHeart className='lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px] text-green-500' /> :
                            <IoHeartOutline className='lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px]' />
                    }</button>
                     <button className=""><IoBarChartOutline className="lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px]" /></button>
         </div>
          </div>
          <img src={mainImg} alt={product.title} className="lg:w-[500px] w-[280px] mt-[30px] ml-[20px] h-[250px] lg:h-[350px] lg:ml-[20px] lg:mt-[30px]" />
          <div className='flex gap-[20px] lg:mt-[10px] lg:ml-[30px] ml-[20px] '>
            {thumbnails.map((thumb, index) => (
              <img 
                key={index} 
                src={thumb} 
                className='w-[50px] h-[50px] cursor-pointer' 
                alt="" 
                onClick={() => handleThumbnailClick(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;
