import { useState } from 'react';
import { productData } from '../../static/data';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoHeart } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import {addToCart} from '../../context/cartSlice'
import { toggleToWishes } from '../../context/wishlistSlice';
import Compleks from '../../components/Complex/Compleks';
import Products from '../../components/Products/Products';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import Brands from '../../components/Brands/Brands';
import Quetions from '../../components/Quetions/Quetions';
import Subscribe from '../../components/Subscribe/Subscribe';
import { toggleToComparison } from '../../context/comparisonSlice';
import Comparison1 from '../../assets/Comparison2.svg'


const Stock = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openDirections, setOpenDirections] = useState(false);
  const wishes = useSelector((state) => state.wishlist.value);
  const comparison = useSelector((state) => state.comparison.value);
  const cartsInStore = useSelector(state => state.cart.value);
  const dispatch = useDispatch();



  
 

  const handleToggleDirections = () => {
    setOpenDirections(!openDirections);
  };

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
  
  const filteredProducts = productData.filter((product, index) => product.category === 'Акции' && index < 28);


  return (
    <div >
       <BreadCrumbs />
      <div className="mx-auto lg:flex lg:justify-between w-full max-w-[1300px] px-5 py-5">
       
        <div className="md:flex md:flex-row justify-between flex-col">
          <h1 className="lg:hidden py-[10px] text-[#202020] text-[22px] font-bold">
            Популярные категории
          </h1>
          <ul
            className={`lg:hidden max-w-[350px] ${openDirections ? 'md:z-10 relative md:w-[350px] max-w-[600px]' : ' max-w-[600px] md:w-[350px]'}`}
          >
            <li
              className= "mf:absolute md:w-[350px] text-neutral-800 text-[18px] font-medium leading-snug border-[2px] border-[#E5E2EE] h-[48px] max-w-[760px] p-[10px] rounded-[10px] cursor-pointer"
              onClick={handleToggleDirections}
            >
              Направления
              {openDirections && (
              <li className="md:w-[350px] md:ml-[-12px] md:mt-[20px] border-[2px] bg-[#F8F7F3] border-[#E5E2EE]   p-[10px] rounded-[10px] mt-[5px] hidden md:block">
                  <li className="text-neutral-800 text-[17px] mt-[10px] font-normal">
              Группы товаров
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Мониторы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Лампы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Кровати
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Рентгены
              </li>
              </li>
            )}
            </li>
            {openDirections && (
              <li className="border-[2px] border-[#E5E2EE] p-[10px] rounded-[10px] mt-[5px] block md:hidden">
                   <li className="text-neutral-800 text-[17px] mt-[10px] font-normal">
              Группы товаров
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Мониторы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Лампы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Кровати
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Рентгены
              </li>
              </li>
            )}
          </ul>
          <div className="hidden lg:block mt-[8px]">
            <ul className="border-[2px] border-[#E5E2EE] h-[250px] w-[350px] p-[20px] rounded-[10px]">
              <li className="text-neutral-800 text-[18px] font-medium leading-snug">
                Направления
              </li>
              <hr className="mt-[10px] border-[1px]" />
              <li className="text-neutral-800 text-[17px] mt-[10px] font-normal">
              Группы товаров
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Мониторы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Лампы
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Кровати
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
              Рентгены
              </li>
            
              
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 md:gap-[3px] gap-4">
        
           { filteredProducts.map((product) => (
              <div className="px-1 md:px-2 mt-[5px]" key={product.id}>
              <LazyLoad height={400} once>
                <div className="flex flex-col items-center rounded-[10px] border-[1px] md:h-[400px] lg:h-[440px] sm:h-[300px] gap-[20px]">
                  <div className="lg:h-[280px] md:h-[250px] sm:h-[220px] w-full items-center rounded-t-[10px] overflow-hidden bg-white pt-[20px] flex flex-col">
                    <div
                      className={`flex items-center lg:w-[220px] md:w-[200px] justify-between w-[125px]`}
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
                      <LazyLoad height={180}>
                        <img
                          src={product.img}
                          alt={product.title}
                          className="mx-auto block object-cover max-w-[220px]  lg:h-[220px] md:h-[180px] h-[80px] mt-[10px]"
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
            ))}
         
        
        </div>
      </div>
      <Compleks />
      <Products />
      <Brands />
      <Quetions />
      <Subscribe />
    </div>
  );
};

export default Stock;
