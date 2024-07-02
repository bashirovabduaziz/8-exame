import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Numbers = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className='mx-auto max-w-[1300px] px-5 py-[30px] lg:flex lg:place-items-start lg:justify-between'>
      <div>
        <p className="text-neutral-800 text-3xl font-medium leading-9">Цифры и факты</p>
        <p className="max-w-[290px] opacity-50 text-neutral-800 text-base font-medium mt-[15px] leading-snug">Мы работаем на результат и продаём только качественную продукцию</p>
      </div>
      <div className='lg:w-[650px] max-w-[1020px] lg:mt-[-10px] mt-[10px]'>
        <div className='flex items-center ml-[10px] max-w-[1020px] justify-between'>
          <p className='text-[#088269] lg:text-[40px] md:text-[33px] text-[25px]'>
            {inView && <CountUp end={7} duration={7} />} лет
          </p>
          <p className='text-[#202020] lg:text-[20px] md:text-[18px] text-[12px]'>на рынке</p>
        </div>
        <hr />
        <div className='flex items-center ml-[10px] max-w-[1020px] justify-between'>
          <p className='text-[#088269] lg:text-[40px] md:text-[33px] text-[25px]'>
            {inView && <CountUp end={964} duration={7} suffix="+" />}
          </p>
          <p className='text-[#202020] lg:text-[20px] md:text-[18px] text-[12px]'>оригинальной продукции со всего мира</p>
        </div>
        <hr />
        <div className='flex items-center ml-[10px] max-w-[1020px] justify-between'>
          <p className='text-[#088269] lg:text-[40px] md:text-[33px] text-[25px]'>
            {inView && <CountUp end={23} duration={7} suffix="+" />}
          </p>
          <p className='text-[#202020] lg:text-[20px] md:text-[18px] text-[12px]'>международных сертификатов качества</p>
        </div>
        <hr />
        <div className='flex items-center ml-[10px] max-w-[1020px] justify-between'>
          <p className='text-[#088269] lg:text-[40px] md:text-[33px] text-[25px]'>
            {inView && <CountUp end={2452} duration={7} suffix="+" />}
          </p>
          <p className='text-[#202020] lg:text-[20px] md:text-[18px] text-[12px]'>товаров всегда в наличии</p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
