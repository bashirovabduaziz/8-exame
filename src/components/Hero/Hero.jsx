import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { carousel } from '../../static/Carousel'; // Adjust the path as needed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyLoad from 'react-lazyload';

export default function Hero() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
  };

  return (
    <div className="relative max-w-[1300px] mx-auto my-5 px-5">
      <Slider ref={sliderRef} {...settings}>
        {carousel.map((item) => (
          <div
            key={item.id}
            className="w-full h-[400px] md:h-[350px] bg-[#E5E4ED] rounded-[10px] overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center h-full">
              <div className="flex-1 p-5 max-w-[400px] md:max-w-[400px]">
                <h1 className="text-[28px] md:text-[34px] font-medium text-[#202020] mb-4">
                  Заголовок баннера в пару строк
                </h1>
                <p className="text-[12px] md:text-[16px] font-medium text-[#7A7687] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex gap-4">
                  <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] md:text-[16px] font-semibold text-[#F8F7F3]">
                    Запросить цену
                  </button>
                  <button className="rounded-[50px] border-[2px] border-[#D5D1E1] px-5 py-2 text-[12px] md:text-[16px] font-semibold text-[#088269] hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6]">
                    В каталог
                  </button>
                </div>
              </div>
              <div className="flex-1 h-full relative">
                <img src={item.img} alt="" className="md:hidden" />
                <LazyLoad height={400} once>
                  <img
                    src={item.img}
                    alt={`heroImg${item.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-6 right-10 flex gap-4">
        <button
          className="border-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block bg-white"
          onClick={previous}
        >
          <FaLongArrowAltLeft size={20} />
        </button>
        <button
          className="border-[1px] border-[#D5D1E1] rounded-full p-3 hover:border-[#07745E] duration-200 focus:bg-[#E1EFE6] hidden md:block bg-white"
          onClick={next}
        >
          <FaLongArrowAltRight size={20} />
        </button>
      </div>
    </div>
  );
}
