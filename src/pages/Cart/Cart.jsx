import React, { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { decCart, incCart, removeFromCart, clearCart } from '../../context/cartSlice';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import { IoHeart } from 'react-icons/io5';
import { toggleToWishes } from '../../context/wishlistSlice';
import Cross from '../../assets/cross.svg'
import { Link } from 'react-router-dom';
import Comparison1 from '../../assets/Comparison2.svg'
import { toggleToComparison } from '../../context/comparisonSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.value);
  const wishes = useSelector((state) => state.wishlist.value);
  const comparison = useSelector((state) => state.comparison.value);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const totalPrice = calculateTotalPrice();
 
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

  let cart = cartItems?.map((cart) => (
    <div key={cart.id} className='relative border md:w-[500px] md:gap-[40px] lg:w-[800px] xl:w-[800px] max-w-[1000px] flex lg:justify-between lg:gap-[10px] rounded-[10px] overflow-hidden mt-[15px]'>

      <div className='bg-white lg:w-[260px] md:h-[260px] md:w-[250px] lg:h-[260px]'>
        <div
          className={`mt-[10px] flex items-center lg:w-[250px] lg:mt-[10px] ml-[10px] md:mt-[10px] md:w-[230px] justify-between w-[130px] mx-auto`}
        >
          <p
            className={` ${getCategoryClass(cart.category)} text-[8px] md:text-[17px]`}
          >
            {cart.category}
          </p>
          <div className="gap-[6px] flex items-center lg:hidden">
          <button className=""  onClick={() => dispatch(toggleToComparison(cart))}>
                        {comparison.some((w) => w.id === cart.id) ? (
                             <img src={Comparison1} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          ) : (
                            <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          )}
                        </button>
            <button
              onClick={() => dispatch(toggleToWishes(cart))}
            >
              {' '}
              {wishes.some((w) => w.id === cart.id) ? (
                <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#088269]" />
              ) : (
                <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
              )}
            </button>
          </div>
        </div>
        <img src={cart.img} alt="" className='mx-auto lg:max-w-[250px] md:max-w-[200px] max-w-[150px] object-cover lg:h-[200px]' />
      </div>
      <div className='px-[10px]'>
        <p className=' lg:w-[250px] text-[#202020] md:font-medium w-[110px] md:text-[16px] lg:text-[18px] text-[12px] mt-[15px]'>{cart.title}</p>
        <p className='md:text-[15px] text-[10px] font-thin lg:mt-[10px] text-[#7A7687]'>Артикул: 213134</p>
        <p className='md:text-[15px] text-[10px] font-thin lg:mt-[10px] text-[#7A7687]'>В наличии</p>
        <div className='lg:hidden lg:py-[10px]'>
          <p className='font-medium text-[13px] text-[#202020] md:text-[16px]'>{cart.price} руб.</p>
          <div className="">
              <span className="border mt-[10px] rounded-full w-[85px] py-1 flex justify-center items-center gap-2">
                <button className="p-1" disabled={cart.quantity <= 1} onClick={() => dispatch(decCart(cart))}>
                  -
                </button>
                <p>{cart.quantity}</p>
                <button className="p-1" onClick={() => dispatch(incCart(cart))}>
                  +
                </button>
              </span>
            </div>
        </div>
      </div>
      <div className='hidden lg:block mt-[15px]'>
        <p className='font-medium text-[#202020] lg:text-[18px]'>{cart.price} руб.</p>
        <div className="">
              <span className="border mt-[10px] rounded-full w-[85px] py-1 flex justify-center items-center gap-2">
                <button className="p-1" disabled={cart.quantity <= 1} onClick={() => dispatch(decCart(cart))}>
                  -
                </button>
                <p>{cart.quantity}</p>
                <button className="p-1" onClick={() => dispatch(incCart(cart))}>
                  +
                </button>
              </span>
            </div>
      </div>
      <div className="gap-[10px] px-[15px] mt-[15px] lg:block hidden items-center">
      <button className=""  onClick={() => dispatch(toggleToComparison(cart))}>
                        {comparison.some((w) => w.id === cart.id) ? (
                             <img src={Comparison1} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          ) : (
                            <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                          )}
                        </button>
        <button
          className=""
          onClick={() => dispatch(toggleToWishes(cart))}
        >
          {' '}
          {wishes.some((w) => w.id === cart.id) ? (
            <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#088269]" />
          ) : (
            <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
          )}
        </button>

        <button onClick={() => dispatch(removeFromCart(cart))} className=''>
          <img src={Cross} alt="" className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]' />
        </button>
      </div>
      <div className='absolute top-2 right-2 lg:hidden'>
        <button onClick={() => dispatch(removeFromCart(cart))} className=''>
          <img src={Cross} alt="" className='w-[20px] h-[20px]' />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <BreadCrumbs />
      <div className='max-w-[1300px] mx-auto px-5 py-10 md:flex justify-between'>
       {cartItems.length ? ( <div>
          {cart}
        </div>) : (<div className="flex">
          <div className="mt-[10px]">
            <h2 className="text-[18px] sm:text-[20px] md:text-[34px] md:leading-[36px]">
              Не добавлено товаров в корзину 
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
        <div className="sm:w-[30%] bg-[#fff] mt-[15px] h-full border p-5 rounded-lg">
          <span className="flex justify-between items-center pb-3 border-b">
            <h2 className="text-[16px] font-semibold">Итого</h2>
            <p className="text-[14px] font-semibold"> ${totalPrice.toFixed(2)} руб.</p>
          </span>
          <span className="flex pt-2 justify-between">
            <h2 className="text-[12px]">
              Товары ({cartItems.length})
            </h2>
          </span>
          <span className="flex py-1 justify-between">
            <h2 className="text-[12px]">Скидка</h2>
            <p className="text-[12px]">0 руб.</p>
          </span>
          <span className="flex flex-col pt-[10px] gap-2">
            <button className="py-2 w-full  lg:text-[16px] text-[12px] bg-[#088269] text-[#fff] border rounded-full">
              Оформить заказ
            </button>
            <button className="py-2 w-full lg:text-[16px] text-[12px] rounded-full border">
              Задать вопрос
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
