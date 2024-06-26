import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleToWishes } from "../../context/wishlistSlice";
import { IoBarChartOutline, IoHeart, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value)
  const dispatch = useDispatch()
  console.log(wishes);
  useEffect(() => {
    window.scrollTo(0, 0);
   
    }, []);
    const getCategoryClass = (category) => {
      switch (category) {
        case 'Акции':
          return 'border border-red-500 rounded-full p-[3px] text-red-500';
        case 'Новинки':
          return 'border border-green-500 rounded-full p-[3px] text-green-500';
        case 'Хиты продаж':
          return 'border border-blue-500 rounded-full p-[3px] text-blue-500';
        default:
          return '';
      }
    };

    const wishs = wishes.map((el) =>   <div className="px-1 md:px-2 mt-[5px] " key={el.id}>
    <div className={`flex flex-col items-center rounded-[10px] border-[1px] md:h-[440px] h-[250px] gap-[20px]`}>
      <div className="md:h-[280px] h-[250px] w-full items-center rounded-t-[10px] bg-white pt-[20px] flex flex-col">
        <div className={`flex  items-center md:w-[250px] justify-between w-[130px]`}>
          <p className={` ${getCategoryClass(el.category)} text-[10px] md:text-[17px]` }>{el.category}</p>
        <div className="gap-[6px] flex items-center">
        <button className=""><IoBarChartOutline className="md:w-[25px] md:h-[25px]" /></button>
        <button onClick={() => dispatch(toggleToWishes(el))}> {
              wishes.some(w => w.id === el.id) ?
                  <IoHeart className='md:w-[25px] md:h-[25px] text-green-500' /> :
                  <IoHeartOutline className='md:w-[25px] md:h-[25px]' />
          }</button>
           <Link to={`/single-product/${el.id}`}>
  <IoSearchOutline className='md:w-[25px] md:h-[25px]' />
</Link>
        </div>
        </div>
        <img src={el.img} alt={el.title} className="mx-auto block md:w-[300px] md:h-[220px] h-[80px] mt-[10px] " />
      </div>
      <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
        <p className="text-[12px] font-medium text-[#202020] mt-[-30px] md:text-[16px] md:w-[200px] md:h-[30px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
          {el.title}
        </p>
      <div className="flex items-end py-[10px]">
      <p className="text-[14px] md:text-[18px]">{el.price}руб.</p>
      <del className="text-red-500 md:text-[15px] text-[12px] ml-[5px]">{el.oldprice}</del>
      </div>
      <button className=" rounded-[50px] border-[2px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[10px] md:text-[18px] py-[5px] text-[#202020] 
       hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]">Добавить в корзину</button>
      </div>
    </div>
  </div>)

    return (
      <>
      <div className='mx-auto px-4 py-8 max-w-[1300px]  my-20 '>
        <h1 className="wishlist__title">Wishlist</h1>
        <div className='flex items-center'>{wishs}</div>

        </div>
      </>
    )
}

export default Wishlist