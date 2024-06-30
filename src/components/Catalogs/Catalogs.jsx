import React from 'react'
import { productData } from '../../static/data'
import { Link } from 'react-router-dom'
import Compleks from '../Complex/Compleks';
import Cureer from '../Cureer/Cureer';
import Products from '../Products/Products';
import Brands from '../Brands/Brands';
import News from '../News/News';

const Catalogs = () => {
  const limitedProductData = productData.slice(0, 10);

  return (
   <div>
     <div className='mx-auto lg:flex lg:justify-between w-full max-w-[1300px] px-5 py-10'>
        <div className='md:flex  md:flex-row justify-between flex-col'>
       <h1 className='lg:hidden py-[10px] text-[#202020] text-[22px] font-bold'> Популярные категории</h1>
       <ul className='border-[2px] border-[#E5E2EE] h-[50px] w-[350px] p-[20px] rounded-[10px] lg:hidden overflow-hidden hover:h-[580px] '>
            <li className="text-neutral-800 text-[18px] font-medium  leading-snug mt-[-8px] ">Направления</li>
            <hr  className='mt-[10px] border-[1px]'/>
            <li className="text-neutral-800 text-[17px] mt-[10px] font-normal  ">Реанимация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Хирургия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Офтальмология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Лабораторная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Акушерство и Гинекология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Гистология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Косметология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Оториноларингология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Рентгенология и томография</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Стерилизация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Физиотерапия и реабилитация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Функциональная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Эндоскопия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Новинки</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Распродажи</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Кабинеты под ключ</li>
        </ul>
       <div className='hidden lg:block mt-[10px] '>
        <ul className='border-[2px] border-[#E5E2EE] h-[580px] w-[350px] p-[20px] rounded-[10px] '>
            <li className="text-neutral-800 text-[18px] font-medium  leading-snug">Направления</li>
            <hr  className='mt-[10px] border-[1px]'/>
            <li className="text-neutral-800 text-[17px] mt-[10px] font-normal  ">Реанимация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Хирургия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Офтальмология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Лабораторная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Акушерство и Гинекология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Гистология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Косметология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Оториноларингология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Рентгенология и томография</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Стерилизация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Физиотерапия и реабилитация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Функциональная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Эндоскопия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Новинки</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Распродажи</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal  ">Кабинеты под ключ</li>
        </ul>
       </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  py-[10px]">
        {limitedProductData.map((category, index) => (
         
          <div
            key={category.id}
            className={`flex flex-col items-center border rounded-lg overflow-hidden  ${index === 2 || index === 5 ? 'md:col-span-1 md:row-span-2 md:h-[517px] h-[200px]' : 'md:h-[250px] h-[200px]'}`}
          >
            
            <div className={`overflow-hidden w-full object-cover bg-white border-b ${index === 2 || index === 5 ? 'md:h-[466px]  h-[150px]' : 'md:h-[200px] h-[150px]'}`}>
              <img
                src={category.img}
                alt={category.title}
                className={`object-cover md:w-[150px] h-[150px] w-[150px] ml-[10px] lg:w-[200px]  md:ml-[20px] md:mt-[30px]  lg:ml-[40px] ${index === 5 ? 'md:h-[400px] lg:h-[450px] !md:ml-[100px] sm:h-[150px] sm:w-[150px] lg:ml-[50px] lg:mt-[-1px]' : ''} ${index === 2 ? 'md:h-[400px] md:ml-[40px] ' : ''}`}
              />
            </div>
            <div className="mt-2 text-center">
            <Link to={`/single-product/${category.id}`} className=''>
              <h2 className="text-sm font-medium w-[100px] overflow-hidden text-ellipsis whitespace-nowrap mt-[5px] ">{category.title}</h2>
              </Link>
            </div>
           

          </div>
        
        ))}
      </div>
      
    </div>
    <Compleks />
    <Cureer />
    <Products />
    <Brands />
    <News />
   </div>
  )
}

export default Catalogs
