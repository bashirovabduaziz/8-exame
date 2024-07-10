import React, { useState, useEffect } from 'react';
import { productData } from '../../static/data';
import { useParams } from 'react-router-dom';
import {  IoHeart } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';
import { Rating } from '@mui/material';
import Products from '../../components/Products/Products';
import Compleks from '../../components/Complex/Compleks';
import Brands from '../../components/Brands/Brands';
import Subscribe from '../../components/Subscribe/Subscribe';
import ProductDescription from '../../components/ProductDescriptions/ProductDescription';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import { addToCart } from '../../context/cartSlice';
import { toggleToComparison } from '../../context/comparisonSlice';
import Comparison1 from '../../assets/Comparison2.svg'


const SinglePage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((item) => item.id === productId);
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  const cartsInStore = useSelector(state => state.cart.value);
  const comparison = useSelector((state) => state.comparison.value);

  const [mainImg, setMainImg] = useState(product.img);
  const [thumbnails, setThumbnails] = useState([
    product.imgg,
    product.img2,
    product.img3,
  ]);

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
        return 'border border-[#855E00] rounded-full p-[7px] text-[#855E00] bg-orange-200';
      case 'Новинки':
        return 'border border-[#088269] rounded-full p-[7px] text-[#088269] bg-green-50';
      case 'Хиты продаж':
        return 'border border-[#59599A] rounded-full p-[7px] text-[#59599A] bg-indigo-100 ';
      default:
        return '';
    }
  };

  return (
    <div>
      <BreadCrumbs />
      <div className="mx-auto max-w-[1300px] px-5">
     
        <div className="lg:flex lg:flex-row sm:flex-col md:flex-col  gap-[15px] sm:gap-5 md:gap-[60px]    py-[20px]  ">
          <div className="lg:w-[750px] md:flex-col md:max-w-[800px] max-w-[700px]  p-[20px] max-h-[600px]   bg-white border border-[#E5E2EE] rounded-xl sm:flex-col sm:items-center  ">
            <div className="md:max-w-[700px] sm:max-w-[650px] lg:max-w-[700px]  max-w-[300px] mx-auto  flex  justify-between items-center">
              <p
                className={` ${getCategoryClass(product.category)}  text-[12px]  lg:text-[20px] md:text-[18px]`}
              >
                {product.category}
              </p>
              <div className="flex sm:mr-[15px]">
                <button
                  onClick={() => dispatch(toggleToWishes(product))}
                  className="lg:mr-[20px] mr-[10px] "
                >
                  {' '}
                  {wishes.some((w) => w.id === product.id) ? (
                    <IoHeart className="lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px] text-[#088269]" />
                  ) : (
                    <img src={Favourites} className="lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px]" />
                  )}
                </button>
                <button className=""  onClick={() => dispatch(toggleToComparison(product))}>
                        {comparison.some((w) => w.id === product.id) ? (
                             <img src={Comparison1} className="lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px]" />
                          ) : (
                            <img src={Comparison} className="lg:w-[35px] md:h-[25px] lg:h-[35px] md:w-[25px] h-[18px] w-[18px]" />
                          )}
                        </button>
              </div>
            </div>
            <img
              src={mainImg}
              alt={product.title}
              className="lg:max-w-[700px] object-cover max-h-[400px] 
               mx-auto block"
            />
            <div className="max-w-[200px]  mx-auto  flex  justify-between lg:mt-[70px]  lg:mx-0  ">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  className="w-[50px] h-[50px] cursor-pointer border border-[#E5E2EE] rounded-[5px]"
                  alt=""
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="lg:max-w-[400px] mt-[20px]">
            <h1 className=" text-neutral-800 text-[20px]  md:text-[25px] lg:text-[28px] font-medium  leading-9">
              {product.title}
            </h1>
            <div className="flex !items-center mt-[10px]">
              <Rating
                name="half-rating-read"
                className=""
                defaultValue={4}
                precision={1}
                readOnly
              />
              <p className="text-[18px] ml-[10px] text-[#202020]">4.0</p>
            </div>
            <p className="text-zinc-500 text-[16px] font-normal mt-[5px] ">
              Категория: Лабораторное оборудование
            </p>
            <p className="text-zinc-500 text-[16px] font-normal mt-[5px] ">
              Производитель: Lorem
            </p>
            <p className="text-zinc-500 text-[16px] font-normal mt-[5px] ">
              Артикул: 213134
            </p>
            <p className="text-zinc-500 text-[16px] font-normal mt-[5px] ">
              В наличии
            </p>
            <p className="text-neutral-800 text-[20px] mt-[20px] font-semibold">
              {product.price} руб.
            </p>
            {
                        cartsInStore.some(w => w.id === product.id) ?
                        <button
                        className="rounded-[50px]  border-[2px]  border-[#D5D1E1] p-2 mt-[10px] text-[18px]  text-[#202020] 
                      hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
                      onClick={() => dispatch(addToCart(product))}
                      >
                     
                        Добавлено в корзину
                        
                      </button> :
                      
                          <button
                          className="rounded-[50px] border-[2px]   p-2 mt-[10px] text-[18px] 
                            hover:border-[#07745E] duration-150   bg-[#088269]  text-[#F8F7F3] lg:rounded-[50px]  hover:bg-[#066753] "
                        onClick={() => dispatch(addToCart(product))}
                        >
                              Добавить в корзину
                           
                        </button> 
                    }
            <hr className="mt-[15px]" />
            <p className="text-neutral-800 text-[20px] mt-[5px] font-semibold">
              О товаре
            </p>
            <p className="md:w-[441px] opacity-80 text-neutral-800 text-[15px] mt-[10px] font-medium">
              Но синтетическое тестирование, в своём классическом представлении,
              допускает внедрение поэтапного и последовательного развития
              общества. В рамках спецификации современных стандартов, сторонники
              тоталитаризма в науке будут функционально разнесены.
            </p>
          </div>
        </div>
        <ProductDescription />
      </div>

      <Products />

      <Compleks />
      <Brands />
      <Subscribe />
    </div>
  );
};

export default SinglePage;
