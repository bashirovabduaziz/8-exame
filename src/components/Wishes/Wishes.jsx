import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleToWishes } from "../../context/wishlistSlice";
import { IoBarChartOutline, IoHeart, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Wishes = () => {
    const wishes = useSelector(state => state.wishlist.value)
    const dispatch = useDispatch()
    console.log(wishes);
   
      const getCategoryClass = (category) => {
        switch (category) {
          case 'Акции':
            return 'border border-red-500 rounded-full p-[3px] text-red-500';
          case 'Новинки':
            return 'border border-green-500 rounded-full p-[3px] text-green-500';
          case 'Хиты продаж':
            return 'border border-blue-500 rounded-full p-[3px] text-blue-500 ';
          default:
            return '';
        }
      };
      const wishs = wishes.map((el) =>     <div className="px-1 md:px-2 mt-[5px]" key={el.id}>
      <LazyLoad height={420} once>
        <div className="flex flex-col items-center rounded-[10px] border-[1px] md:h-[420px] lg:h-[440px] sm:h-[300px] gap-[20px]">
          <div className="lg:h-[280px] md:h-[260px] sm:h-[220px] w-full items-center rounded-t-[10px] bg-white pt-[20px] flex flex-col">
            <div className={`flex items-center lg:w-[265px] md:w-[200px] justify-between w-[130px]`}>
              <p className={` ${getCategoryClass(el.category)} text-[8px] md:text-[17px]`}>{el.category}</p>
              <div className="gap-[6px] flex items-center">
                <button className=""><IoBarChartOutline className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" /></button>
                <button onClick={() => dispatch(toggleToWishes(el))}> {
                  wishes.some(w => w.id === el.id) ?
                    <IoHeart className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-green-500' /> :
                    <IoHeartOutline className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]' />
                }</button>
               
              </div>
            </div>
            <Link to={`/single-product/${el.id}`}>
            <LazyLoad height={200}>
              <img src={el.img} alt={el.title} className="mx-auto block md:w-[300px] lg:h-[200px] md:h-[200px] h-[80px] mt-[10px]" />
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
              <p className="text-[12px] md:text-[16px] lg:text-[18px]">{el.price}руб.</p>
              <del className="text-red-500 md:text-[14px] text-[8px] ml-[5px]">{el.oldprice}</del>
            </div>
            <button className="rounded-[50px] border-[2px] md:text-[13px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
            hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]">Добавить в корзину</button>
          </div>
        </div>
      </LazyLoad>
    </div>)
  
  return (
    <div className='mx-auto px-4 py-[20px] max-w-[1300px]  '>
        <h1 className="text-[25px] text-[#202020] font-bold">Избранное</h1>
        <div className=' lg:flex lg:justify-between mt-[10px]'>
            <div>
                <p className='text-[18px] text-[#202020] '>
                    Все Товары  ({wishes.length})
                </p>
            </div>
      <div className='flex-col '>
        <div className='max-w-[1150px] border border-[#E5E2EE] rounded-[10px] h-[50px] '>
            
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3  gap-5 max-w-[1150px] mt-[20px] '>{wishs}</div>
      </div>
        </div>
        </div>
  )
}

export default Wishes