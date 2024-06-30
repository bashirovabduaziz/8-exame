import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from '../../static/data';
import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaRegHeart } from "react-icons/fa";
import { IoBarChartOutline, IoHeartOutline , IoHeart, IoSearchOutline, IoSearchSharp} from "react-icons/io5";
import { toggleToWishes } from "../../context/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductsData = ({ category }) => {
  const wishes = useSelector(state => state.wishlist.value);
  let sliderRef = useRef(null);
  const dispatch = useDispatch();

  const next = () => {
    sliderRef.slickNext();
  };
  
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

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

  const filteredProducts = category === 'Все Категории' ? productData : productData.filter(product => product.category === category);

  return (
    <div className="slider-container">
      <div className="relative w-[95%] max-w-[900px]">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
        
          {filteredProducts.map((el) => (
            <div className="px-1 md:px-2 mt-[5px] " key={el.id}>
              <div className={`flex flex-col items-center rounded-[10px] border-[1px] md:h-[420px] lg:h-[440px] sm:h-[300px] gap-[20px]`}>
                <div className="lg:h-[280px] md:h-[260px] sm:h-[220px] w-full items-center rounded-t-[10px] bg-white pt-[20px] flex flex-col">
                  <div className={`flex  items-center lg:w-[250px]  md:w-[200px] justify-between w-[130px]`}>
                    <p className={` ${getCategoryClass(el.category)} text-[8px] md:text-[17px]` }>{el.category}</p>
                  <div className="gap-[6px] flex items-center">
                  <button className=""><IoBarChartOutline className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" /></button>
                  <button onClick={() => dispatch(toggleToWishes(el))}> {
                        wishes.some(w => w.id === el.id) ?
                            <IoHeart className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-green-500' /> :
                            <IoHeartOutline className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]' />
                    }</button>
                     <Link to={`/single-product/${el.id}`}>
            <IoSearchOutline className='lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]' />
        </Link>
                  </div>
                  </div>
                  <img src={el.img} alt={el.title} className="mx-auto block md:w-[300px] lg:h-[220px] md:h-[200px] h-[80px] mt-[10px] " />
                </div>
                <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
                  <p className="text-[12px] font-medium text-[#202020] mt-[-30px] md:w-[170px] md:text-[16px] lg:w-[200px] lg:h-[30px] md:h-[20px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {el.title}
                  </p>
                <div className="flex items-end py-[10px]">
                <p className="text-[12px] md:text-[16px] lg:text-[18px]">{el.price}руб.</p>
                <del className="text-red-500 md:text-[14px] text-[8px] ml-[5px]">{el.oldprice}</del>
                </div>
                <button className=" rounded-[50px] border-[2px] md:text-[14px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
                 hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]">Добавить в корзину</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          <button
            className="button absolute bottom-[-60px] left-2 border-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block"
            onClick={previous}
          >
            <FaLongArrowAltLeft size={20} />
          </button>
          <button
            className="button absolute bottom-[-60px] left-20 border-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block"
            onClick={next}
          >
            <FaLongArrowAltRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все Категории');

  return (
    <div className='mx-auto px-4 py-8 max-w-[1300px] lg:flex my-20 lg:justify-between'>
      <div>
        <h1 className='mb-3 text-[18px] font-medium text-[#202020]  sm:mb-9 sm:text-[20px] lg:mb-10 lg:text-[30px]'>Каталог товаров</h1>
        <div className='flex lg:flex-col mt-[20px] gap-[8px] md:place-items-start text-[14px] md:text-[18px]'>
          <button className={`text-gray-400 ${selectedCategory === 'Все Категории' ? 'font-bold' : ''}`} onClick={() => setSelectedCategory('Все Категории')}>Все Категории</button>
          <button className={`text-gray-400 ${selectedCategory === 'Хиты продаж' ? 'font-bold' : ''}`} onClick={() => setSelectedCategory('Хиты продаж')}>Хиты продаж</button>
          <button className={`text-gray-400 ${selectedCategory === 'Новинки' ? 'font-bold' : ''}`} onClick={() => setSelectedCategory('Новинки')}>Новинки</button>
          <button className={`text-gray-400 ${selectedCategory === 'Акции' ? 'font-bold' : ''}`} onClick={() => setSelectedCategory('Акции')}>Акции</button>
        </div>
      </div>
      <div className="mt-[10px]">
        <ProductsData category={selectedCategory} />
        
      </div>
    </div>
  );
};

export default Products;
