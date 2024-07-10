import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';
import {addToCart} from '../../context/cartSlice';
import {  IoHeart} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTableCellsLarge } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import { toggleToComparison } from '../../context/comparisonSlice';
import Comparison1 from '../../assets/Comparison2.svg'

const Wishes = () => {
  const wishes = useSelector((state) => state.wishlist.value);
  const cartsInStore = useSelector(state => state.cart.value);
  const comparison = useSelector((state) => state.comparison.value);

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
  const wishs = wishes.map((product) => (
    <div className="px-1 md:px-2 mt-[5px]" key={product.id}>
    <LazyLoad height={420} once>
      <div className="flex flex-col items-center rounded-[10px] border-[1px]  md:h-[420px] lg:h-[440px] sm:h-[300px] gap-[20px]">
        <div className="lg:h-[280px] md:h-[260px] sm:h-[220px] w-full items-center rounded-t-[10px] overflow-hidden bg-white pt-[20px] flex flex-col">
          <div
            className={`flex items-center lg:w-[250px] md:w-[200px] justify-between w-[130px]`}
          >
            <p
              className={` ${getCategoryClass(product.category)} text-[8px] md:text-[17px]`}
            >
              {product.category}
            </p>
            <div className="gap-[6px] flex items-center">
            <button className=""  onClick={() => dispatch(toggleToComparison(product))}>
                        {comparison.some((w) => w.id === product.id) ? (
                             <img src={Comparison1} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          ) : (
                            <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          )}
                        </button>
              <button
                onClick={() => dispatch(toggleToWishes(product))}
              >
                {' '}
                {wishes.some((w) => w.id === product.id) ? (
                  <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#088269]" />
                ) : (
                  <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                )}
              </button>
            </div>
          </div>
          <Link to={`/single-product/${product.id}`}>
            <LazyLoad height={200}>
              <img
                src={product.img}
                alt={product.title}
                className="mx-auto block object-cover max-w-[220px]  lg:h-[220px] md:h-[200px] h-[80px] mt-[10px]"
              />
            </LazyLoad>
          </Link>
        </div>
        <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
          <Link to={`/single-product/${product.id}`}>
            <p className="text-[12px] font-medium text-[#202020] mt-[-30px] md:w-[170px] md:text-[16px] lg:w-[200px] lg:h-[30px] md:h-[20px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.title}
            </p>
          </Link>
          <div className="flex items-end py-[10px]">
            <p className="text-[12px] md:text-[16px] lg:text-[18px]">
              {product.price}руб.
            </p>
            <del className="text-red-500 md:text-[14px] text-[8px] ml-[5px]">
              {product.oldprice}
            </del>
          </div>
          {
              cartsInStore.some(w => w.id === product.id) ?
              <button
              className="rounded-[50px] border-[2px] md:text-[14px]  md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] 
                hover:border-[#07745E] duration-150   bg-[#088269] py-[5px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5  hover:bg-[#066753] "
            onClick={() => dispatch(addToCart(product))}
            >
               
                Добавлено в корзину
            </button> :
                  <button
                  className="rounded-[50px] border-[2px] md:text-[14px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
                hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
                onClick={() => dispatch(addToCart(product))}
                >
                  Добавить в корзину
                
                  
                </button>
          }
          
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
      className="h-full w-full rounded-l-[10px] object-cover max-w-[150px]
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
            <button className=""  onClick={() => dispatch(toggleToComparison(wish))}>
                        {comparison.some((w) => w.id === wish.id) ? (
                             <img src={Comparison1} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          ) : (
                            <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          )}
                        </button>
                <button onClick={() => dispatch(toggleToWishes(wish))}>
                  {' '}
                  {wishes.some((w) => w.id === wish.id) ? (
                    <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#07745E]" />
                  ) : (
                    <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                  )}
                </button>
                {
              cartsInStore.some(w => w.id === wish.id) ?
              <button
              className="hidden lg:block rounded-[50px] border-[2px] md:text-[14px]  md:px-5  px-2 text-[8px] lg:text-[16px] 
                hover:border-[#07745E] duration-150   bg-[#088269] py-[5px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5  hover:bg-[#066753] "
            onClick={() => dispatch(addToCart(wish))}
            >
               
                Добавлено в корзину
            </button> :
                  <button
                  className="hidden lg:block rounded-[50px] border-[2px] md:text-[14px] border-[#D5D1E1] md:px-5  px-2 text-[8px] lg:text-[16px] py-[5px] text-[#202020] 
                hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
                onClick={() => dispatch(addToCart(wish))}
                >
                  Добавить в корзину
                
                  
                </button>
          }
              </div>
              {
              cartsInStore.some(w => w.id === wish.id) ?
              <button
              className="lg:hidden  rounded-[50px] border-[2px] md:text-[14px]  md:px-5  px-2 text-[8px] lg:text-[16px] 
                hover:border-[#07745E] duration-150   bg-[#088269] py-[5px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5  hover:bg-[#066753] "
            onClick={() => dispatch(addToCart(wish))}
            >
               
                Добавлено в корзину
            </button> :
                  <button
                  className="lg:hidden rounded-[50px] border-[2px] md:text-[14px] border-[#D5D1E1] md:px-5  px-2 text-[8px] lg:text-[16px] py-[5px] text-[#202020] 
                hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
                onClick={() => dispatch(addToCart(wish))}
                >
                  Добавить в корзину
                
                  
                </button>
          }
   </div>
  </div>
));
  return (
    <div className="mx-auto px-4 py-[20px] max-w-[1300px]  ">
      <h1 className="text-[25px] text-[#202020] font-bold">Избранное</h1>
      <div className=" lg:flex lg:justify-between mt-[10px]">
        <div>
        {wishes.length ? (
            <p className="text-[18px] text-[#202020] ">
            Все Товары ({wishes.length})
          </p>
        ) : ('')}
        </div>
        {wishes.length ? (
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3  lg:gap-5 max-w-[1200px] mt-[20px] ">
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
        ) : ( <div className="flex">
          <div className="lg:mt-[-45px]">
            <h2 className="text-[18px] sm:text-[20px] md:text-[34px] md:leading-[36px]">
              Не добавлено товаров в избранное
            </h2>
            <p className="text-[12px] sm:text-[14px] md:text-[18px] pt-[10px] md:pt-[20px]  pb-[10px] w-[80%] md:w-[50%]  text-[#7A7687]">
              Вы можете перейти на главную страницу или воспользоваться
              каталогом товаров
            </p>
            <span className="flex gap-2">
              <Link
                to={"/"}
                className=" px-5 py-2 rounded-[50px] border-[2px] border-[#D5D1E1] text-[#202020] xl:block hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
              >
                На главную
              </Link>
              <Link
                to={"/catalog"}
                className="rounded-full  px-5 py-2 border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px]   hover:bg-[#066753] duration-150"
              >
                В каталог
              </Link>
            </span>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Wishes;
