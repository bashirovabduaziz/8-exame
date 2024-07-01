import React from 'react';
import { cureerData } from '../../static/Cureer';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cureer = () => {
  return (
    <div className="mx-auto w-full max-w-[1300px] px-5 py-[50px]">
      <h3 className="mb-2 text-[18px] font-medium  text-[#202020] md:mb-[30px] md:text-[20px] xl:mb-10 xl:text-[30px]">
        Почему выбирают нас?
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {cureerData.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-center rounded-[7px] border-[1px] border-[#E5E2EE] px-4 py-[30px]"
          >
            <LazyLoadImage
              src={option.img}
              alt={option.title}
              className="mb-6"
            />
            <p className="text-[12px] font-medium text-[#202020] md:text-[14px]">
              {option.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cureer;
