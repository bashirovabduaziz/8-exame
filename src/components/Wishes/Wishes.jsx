import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';
import {
  IoBarChartOutline,
  IoHeart,
  IoHeartOutline
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTableCellsLarge } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'

const Wishes = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  console.log(wishes);
 
  const [activeTab, setActiveTab] = useState('hamburger');

  
  const getCategoryClass = (category) => {
    switch (category) {
      case 'Акции':
        return 'border border-[#855E00] rounded-full p-[3px] text-[#855E00] bg-orange-200';
      case 'Новинки':
        return 'border border-[#088269] rounded-full p-[3px] text-[#088269] bg-green-50';
      case 'Хиты продаж':
        return 'border border-[#59599A] rounded-full p-[3px] text-[#59599A] bg-indigo-100 ';
      default:
        return '';
    }
  };
  const wishs = wishes.map((el) => (
    <div className="px-1 md:px-2 mt-[5px]" key={el.id}>
      <LazyLoad height={420} once>
        <div className="flex flex-col items-center rounded-[10px] border-[1px] md:h-[420px] lg:h-[440px] sm:h-[300px] gap-[20px]">
          <div className="lg:h-[280px] md:h-[260px] sm:h-[220px] w-full items-center rounded-t-[10px] bg-white pt-[20px] flex flex-col">
            <div
              className={`flex items-center lg:w-[265px] md:w-[200px] justify-between w-[130px]`}
            >
              <p
                className={` ${getCategoryClass(el.category)} text-[8px] md:text-[17px]`}
              >
                {el.category}
              </p>
              <div className="gap-[6px] flex items-center">
                <button className="">
                  <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                </button>
                <button onClick={() => dispatch(toggleToWishes(el))}>
                  {' '}
                  {wishes.some((w) => w.id === el.id) ? (
                    <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#07745E]" />
                  ) : (
                    <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                  )}
                </button>
              </div>
            </div>
            <Link to={`/single-product/${el.id}`}>
              <LazyLoad height={200}>
                <LazyLoadImage
                  src={el.img}
                  alt={el.title}
                  className="mx-auto block md:w-[300px] lg:h-[200px] md:h-[200px] h-[80px] mt-[10px]"
                />
              </LazyLoad>
            </Link>
          </div>
          <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
            <Link to={`/single-product/${el.id}`}>
              <p className="text-[12px] font-medium text-[#202020] mt-[-30px] md:w-[170px] md:text-[16px] lg:w-[200px] lg:h-[30px] md:h-[20px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {el.title}
              </p>
            </Link>
            <div className="flex items-end py-[10px]">
              <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                {el.price}руб.
              </p>
              <del className="text-red-500 md:text-[14px] text-[8px] ml-[5px]">
                {el.oldprice}
              </del>
            </div>
            <button
              className="rounded-[50px] border-[2px] md:text-[13px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
            hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </LazyLoad>
    </div>
  ));
 
const wishline = wishes.map((wish) => (
  <div key={wish.id} className='flex relative mb-3 lg:gap-[50px] gap-[30px] overflow-hidden  max-w-[1020px] border-[2px] border-[#E5E2EE] rounded-[10px]'>
    <LazyLoadImage
      src={wish.img}
      alt={wish.mah}
      className="h-full w-full rounded-l-[10px] 
      "
      height={150}
      width={150}
      effect="blur"
    />
   <div className='mt-[10px]'>
   <Link to={`/single-product/${wish.id}`}>
              <p className="text-[12px] font-medium text-[#202020] mt-[10px] md:w-[170px] md:text-[16px] lg:w-[200px] lg:h-[30px] md:h-[20px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                {wish.title}
              </p>
            </Link>
            <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                {wish.price}руб.
              </p>
            <div className="gap-[6px] flex items-center mt-[10px]">
            <button className="">
                  <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                </button>
                <button onClick={() => dispatch(toggleToWishes(wish))}>
                  {' '}
                  {wishes.some((w) => w.id === wish.id) ? (
                    <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#07745E]" />
                  ) : (
                    <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                  )}
                </button>
                <button
              className="hidden md:block rounded-[50px] border-[2px] md:text-[13px] border-[#D5D1E1] md:px-5 px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
            hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
            >
              Добавить в корзину
            </button>
              </div>
              <button
              className=" md:hidden mt-[10px] rounded-[50px] border-[2px] md:text-[13px] border-[#D5D1E1] md:px-5 px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
            hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
            >
              Добавить в корзину
            </button>
   </div>
  </div>
));
  return (
    <div className="mx-auto px-4 py-[20px] max-w-[1300px]  ">
      <h1 className="text-[25px] text-[#202020] font-bold">Избранное</h1>
      <div className=" lg:flex lg:justify-between mt-[10px]">
        <div>
          <p className="text-[18px] text-[#202020] ">
            Все Товары ({wishes.length})
          </p>
        </div>
        <div className="flex-col ">
          <div className=" max-w-[1020px] border-[2px] border-[#E5E2EE] rounded-[10px] h-[50px] p-[11px] flex items-center justify-between">
          <select className='bg-[#F8F7F3]'>
            <option value="Все Товары ">Все Товары </option>
            <option value="">Акции</option>
            <option value="">Хиты продаж</option>
          </select>
          <ul className='flex items-center gap-[5px]'>
            <li className={`cursor-pointer ${
              activeTab === 'hamburger'
                ? '  text-[#07745E]'
                : 'text-[#202020]'
            }`}
            onClick={() => setActiveTab('hamburger')}><RxHamburgerMenu className={`cursor-pointer text-[20px] ${
              activeTab === 'hamburger'
                ? '  text-[#07745E]'
                : 'text-[#202020]'
            }`} /></li>

            <li className={`cursor-pointer text-[20px] ${
              activeTab === 'table'
                ? '  text-[#07745E]'
                : 'text-[#202020]'
            }`}
            onClick={() => setActiveTab('table')}><FaTableCellsLarge className={`cursor-pointer text-[20px] ${
              activeTab === 'table'
                ? '  text-[#07745E]'
                : 'text-[#202020]'
            }`} /></li>
          </ul>
          </div>
          <div className='lg:w-[950px]'>
          {activeTab === 'table' && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3  gap-5 max-w-[1150px] mt-[20px] ">
            {wishs}
          </div>
          )}
             {activeTab === 'hamburger' && (
          <div className="mt-[20px]">
            {wishline}
          </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
