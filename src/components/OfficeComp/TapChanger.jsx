import React, { useState } from 'react';
import { productData } from '../../static/data';
import LazyLoad from 'react-lazyload';
import { IoHeart } from 'react-icons/io5';
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import { toggleToWishes } from '../../context/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TapChanger = () => {
  const [activeTab, setActiveTab] = useState('description');
  const wishes = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Акции':
        return 'border border-[#855E00] rounded-full p-[3px] text-[#855E00] bg-orange-200';
      case 'Новинки':
        return 'border border-[#088269] rounded-full p-[3px] text-[#088269] bg-green-50';
      case 'Хиты продаж':
        return 'border border-[#59599A] rounded-full p-[3px] text-[#59599A] bg-indigo-100 ';
      default:
        return '';
    }
  };

  return (
    <div className="mt-20 border border-gray-300 max-w-[1300px] mx-auto  rounded-[10px] overflow-hidden hidden md:block">
      <div className="border-b border-gray-300">
        <ul className="flex mt-[10px]">
          <li
            className={`cursor-pointer pb-2 ml-[10px] ${
              activeTab === 'description'
                ? 'text-[#202020] font-bold border-b-[3px] border-[#07745E]'
                : 'text-[#7A7687]'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Описание оборудования
          </li>
          <li
            className={`ml-4 cursor-pointer pb-2 ${
              activeTab === 'reviews'
                ? 'text-[#202020] font-bold border-b-[3px] border-[#07745E]'
                : 'text-[#7A7687]'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
          Список товаров
          </li>
          
        </ul>
      </div>
      {activeTab === 'description' && (
        <div className=" text-gray-700 space-y-6 bg-white p-[10px]">
          <h3 className="text-[#3D3D3D] text-[18px] font-bold">
            Описание оборудования
          </h3>
          <p className="text-[#727272] font-normal text-[14px]">
            Биохимический анализатор Mindr UA-66 оснащен открытой платформой для
            загрузки образцов и отлично размещается на столе в кабинете врача.
            Функциональная сочетаемость с дополнительным модулем ISE
            обеспечивает увеличение «скорострельности» прибора от 100 до 300
            обработанных пробирок с биоматериалом в час, а также позволит
            замерять показатели K, Na, Cl и Li в плазме, моче, цереброспинальной
            жидкости вместе с другими важными параметрами исследования.
          </p>
          <p className="text-[#727272] font-normal text-[14px]">
            Прибор интуитивно понятен в использовании и техобслуживании,
            экономен в части финансовых затрат не реагенты. Что важно,
            калибровка системы аналогична той, что установлена на более
            современной аппаратуре, и это – идеальный вариант для небольших
            лабораторий, поскольку емкость погрузчика для проб меньше, чем у
            мощного оборудования.
          </p>
          <p className="text-[#727272] font-normal text-[14px]">
            Только небольшая загрузочная емкость для образцов и химических
            компонентов, если сравнивать с передовой аналогичной техникой, не
            позволяет этой системе претендовать на принятие в ряды аппаратуры,
            которой оснащены крупномасштабные лаборатории.
          </p>
        </div>
      )}
      {activeTab === 'reviews' && (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3  gap-5 max-w-[1300px] mt-[20px] p-[10px] '>
            {productData.slice(0,3).map((product) => (
                 <div className="px-1 md:px-2 " key={product.id}>
                 <LazyLoad height={420} once>
                   <div className="flex flex-col items-center rounded-[10px] border-[1px] md:h-[420px] lg:h-[440px] sm:h-[300px] gap-[20px]">
                     <div className="lg:h-[280px] md:h-[260px] sm:h-[220px] w-full items-center rounded-t-[10px] bg-white pt-[20px] flex flex-col">
                       <div
                         className={`flex items-center lg:w-[250px] md:w-[200px] justify-between w-[130px]`}
                       >
                         <p
                           className={` ${getCategoryClass(product.category)} text-[8px] md:text-[17px]`}
                         >
                           {product.category}
                         </p>
                         <div className="gap-[6px] flex items-center">
                           <button className="">
                             <img src={Comparison} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                           </button>
                           <button
                             onClick={() => dispatch(toggleToWishes(product))}
                           >
                             {' '}
                             {wishes.some((w) => w.id === product.id) ? (
                               <IoHeart className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px] text-[#088269]" />
                             ) : (
                               <img src={Favourites} className="lg:w-[25px] md:h-[18px] lg:h-[25px] md:w-[18px] h-[14px] w-[14px]" />
                             )}
                           </button>
                         </div>
                       </div>
                       <Link to={`/single-product/${product.id}`}>
                         <LazyLoad height={200}>
                           <img
                             src={product.img}
                             alt={product.title}
                             className="mx-auto block md:w-[300px] lg:h-[220px] md:h-[200px] h-[80px] mt-[10px]"
                           />
                         </LazyLoad>
                       </Link>
                     </div>
                     <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] sm:py-[15px] md:px-[20px] md:py-[20px]">
                       <Link to={`/single-product/${product.id}`}>
                         <p className="text-[12px] font-medium text-[#202020] mt-[-30px] md:w-[170px] md:text-[16px] lg:w-[200px] lg:h-[30px] md:h-[20px] w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                           {product.title}
                         </p>
                       </Link>
                       <div className="flex items-end py-[10px]">
                         <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                           {product.price}руб.
                         </p>
                         <del className="text-red-500 md:text-[14px] text-[8px] ml-[5px]">
                           {product.oldprice}
                         </del>
                       </div>
                       <button
                         className="rounded-[50px] border-[2px] md:text-[14px] border-[#D5D1E1] md:px-5 md:mt-[10px] px-2 text-[8px] lg:text-[18px] py-[5px] text-[#202020] 
                       hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
                       >
                         Добавить в корзину
                       </button>
                     </div>
                   </div>
                 </LazyLoad>
               </div>
            ))}
            
        </div>
      )}
    
      
     
    </div>
  );
};

export default TapChanger;
