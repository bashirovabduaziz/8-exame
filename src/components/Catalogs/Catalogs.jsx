import { useState } from 'react';
import { productData } from '../../static/data';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CircularProgress } from '@mui/material';

const Catalogs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openDirections, setOpenDirections] = useState(false);
 

  const itemsPerPage = 10;

  const offset = currentPage * itemsPerPage;
  const currentItems = productData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(productData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setLoading(true);
    setCurrentPage(selected);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleToggleDirections = () => {
    setOpenDirections(!openDirections);
  };

  return (
    <div >
       
      <div className="mx-auto lg:flex lg:justify-between w-full max-w-[1300px] px-5 py-5">
       
        <div className="md:flex md:flex-row justify-between flex-col">
          <h1 className="lg:hidden py-[10px] text-[#202020] text-[22px] font-bold">
            Популярные категории
          </h1>
          <ul
            className={`lg:hidden max-w-[350px] ${openDirections ? 'md:z-10 relative md:w-[350px] max-w-[600px]' : ' max-w-[600px] md:w-[350px]'}`}
          >
            <li
              className= "mf:absolute md:w-[350px] text-neutral-800 text-[18px] font-medium leading-snug border-[2px] border-[#E5E2EE] h-[48px] max-w-[760px] p-[10px] rounded-[10px] cursor-pointer"
              onClick={handleToggleDirections}
            >
              Направления
              {openDirections && (
              <li className="md:w-[350px] md:ml-[-12px] md:mt-[20px] border-[2px] bg-[#F8F7F3] border-[#E5E2EE]   p-[10px] rounded-[10px] mt-[5px] hidden md:block">
                  <li className="text-neutral-800 text-[17px] font-normal">
                    Реанимация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Хирургия
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Офтальмология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Лабораторная диагностика
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Акушерство и Гинекология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Гистология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Косметология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Оториноларингология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Рентгенология и томография
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Стерилизация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Физиотерапия и реабилитация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Функциональная диагностика
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Эндоскопия
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Новинки
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Распродажи
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Кабинеты под ключ
                  </li>
              </li>
            )}
            </li>
            {openDirections && (
              <li className="border-[2px] border-[#E5E2EE] p-[10px] rounded-[10px] mt-[5px] block md:hidden">
                  <li className="text-neutral-800 text-[17px] font-normal">
                    Реанимация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Хирургия
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Офтальмология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Лабораторная диагностика
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Акушерство и Гинекология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Гистология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Косметология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Оториноларингология
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Рентгенология и томография
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Стерилизация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Физиотерапия и реабилитация
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Функциональная диагностика
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Эндоскопия
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Новинки
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Распродажи
                  </li>
                  <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                    Кабинеты под ключ
                  </li>
              </li>
            )}
          </ul>
          <div className="hidden lg:block mt-[10px]">
            <ul className="border-[2px] border-[#E5E2EE] h-[580px] w-[350px] p-[20px] rounded-[10px]">
              <li className="text-neutral-800 text-[18px] font-medium leading-snug">
                Направления
              </li>
              <hr className="mt-[10px] border-[1px]" />
              <li className="text-neutral-800 text-[17px] mt-[10px] font-normal">
                Реанимация
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Хирургия
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Офтальмология
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Лабораторная диагностика
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Акушерство и Гинекология
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Гистология
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Косметология
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Оториноларингология
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Рентгенология и томография
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Стерилизация
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Физиотерапия и реабилитация
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Функциональная диагностика
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Эндоскопия
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Новинки
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Распродажи
              </li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">
                Кабинеты под ключ
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-[10px]">
          {loading ? (
            <div className="flex justify-center items-center h-[1000px] w-full  col-span-2 md:col-span-3">
              <CircularProgress color="success" />
            </div>
          ) : (
            currentItems.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col items-center border rounded-lg overflow-hidden   ${index === 2 || index === 5 ? 'md:col-span-1 md:row-span-2 md:h-[517px] h-[200px]' : 'md:h-[250px] h-[200px]'}`}
              >
                <div
                  className={` w-full object-cover flex items-center justify-center max-w-[300px] bg-white border-b ${index === 2 || index === 5 ? 'md:h-[466px] h-[150px]' : 'md:h-[200px] h-[150px]'}`}
                >
                  <LazyLoadImage
                    src={category.img}
                    alt={category.title}
                    effect="blur"
                    width={index === 2 || index === 5 ? '100%' : '150px'}
                    height={index === 2 || index === 5 ? '100%' : '150px'}
                    className={`object-cover h-full w-full max-w-[280px]  ${index === 2 || index === 5 ? ' h-full' : ' '}`}
                  />
                </div>
                <div className="mt-2 text-center">
                  <Link to={`/single-product/${category.id}`} className="">
                    <h2 className="text-sm font-medium w-[100px] overflow-hidden text-ellipsis whitespace-nowrap mt-[5px] ">
                      {category.title}
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          )}
          <ReactPaginate
            className="flex items-center justify-center gap-[20px] lg:mt-[10px] max-w-[700px] mx-auto"
            previousLabel={'← '}
            nextLabel={'→'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'flex justify-center mt-8 space-x-4'}
            previousLinkClassName={
              'p-[14px] border rounded-lg hover:bg-gray-200'
            }
            nextLinkClassName={'p-[14px] border rounded-lg hover:bg-gray-200'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={
              'bg-[#088269] text-white px-3 py-1 border rounded-lg'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogs;
