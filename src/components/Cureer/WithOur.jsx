import React from 'react';
import { cureerData } from '../../static/WIthour';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WithOur = () => {
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
     <div class="grid xl:ml-[80%] place-items-center mt-[10px] ">
     <button
          className="rounded-full lg:text-[14px] xl:text-[16px] border-[1px]  px-[20px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px]  lg:py-[11px] hover:bg-[#066753] duration-150"
          
        >Проверить статус доставки
       
        </button>
     </div>
    </div>
  );
};

export default WithOur;
