import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {  certificates } from '../../static/Certificates';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRef } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

function BrendsCarousel() {
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
    cssEase: 'linear',
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="relative w-[95%] max-w-[900px] ">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {certificates.map((card) => (
            <div className="px-1 md:px-2" key={card.id}>
              <div className="flex flex-col items-center ">
                
                  <LazyLoadImage
                    src={card.img}
                    alt={card.title}
                    className="mx-auto block h-[350px] "
                  />
                
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

export default BrendsCarousel;
