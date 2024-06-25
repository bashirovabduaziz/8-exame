import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from '../../static/data';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const ProductsData = () => {
  let sliderRef = useRef(null);

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

  return (
    <div className="slider-container">
      <div className="relative w-[95%] max-w-[900px]">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {productData.map((el) => (
            <div className="px-1 md:px-2 " key={el.id}>
              <div className="flex flex-col items-center rounded-[10px] border-[1px] border-[#E1DFE7] md:h-[340px] h-[250px] gap-[20px] ">
                <div className="flex md:h-[230px] h-[200px] w-full items-center rounded-t-[10px] bg-white pt-[20px]">
                  <img src={el.img} alt={el.title} className="mx-auto block w-[300px] md:h-[230px] h-[100px]" />
                </div>
                <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
                  <p className="text-[12px] font-medium text-[#202020] sm:text-[14px] md:text-[16px]">
                    {el.title}
                  </p>
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

export default ProductsData;
