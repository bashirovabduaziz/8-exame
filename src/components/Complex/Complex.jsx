// src/components/Complex.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { complexData } from '../../static/Complex'; // Adjusted import path for complexData

// icons
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Complex() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      <div className="w-[95%] mx-auto">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {complexData.map((card) => (
            <div className="px-2" key={card.id}>
              <div className="rounded-[10px] border-[1px] border-[#E5E2EE] overflow-hidden flex flex-col items-center">
                <LazyLoadImage
                  src={card.img}
                  alt={card.title}
                  className="block w-full object-contain"
                />
                <div className="py-4 text-center w-full">
                  <h4 className="text-[16px] font-semibold md:text-[18px]">
                    {card.title}
                  </h4>
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
}

export default Complex;
