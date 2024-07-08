import  { useState } from 'react'
import { Services } from '../../static/Services';
import ReactPaginate from 'react-paginate';

const BlogComp = () => {
  const [openDirections, setOpenDirections] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const offset = currentPage * itemsPerPage;
  const currentPageData = Services.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Services.length / itemsPerPage);

  const handleToggleDirections = () => {
    setOpenDirections(!openDirections);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="mx-auto lg:flex lg:gap-[40px] w-full max-w-[1300px] px-5 py-5">
      <div className="md:flex md:flex-row justify-between flex-col">
        <h1 className="lg:hidden py-[10px] text-[#202020] text-[22px] lg:text-5xl font-bold">
          Блог
        </h1>
        <ul className={`lg:hidden max-w-[350px] ${openDirections ? 'md:z-10 relative md:w-[350px] max-w-[600px]' : 'max-w-[600px] md:w-[350px]'}`}>
          <li className="mf:absolute md:w-[350px] text-neutral-800 text-[18px] font-medium leading-snug border-[2px] border-[#E5E2EE] h-[48px] max-w-[760px] p-[10px] rounded-[10px] cursor-pointer" onClick={handleToggleDirections}>
            Направления
            {openDirections && (
              <li className="md:w-[350px] md:ml-[-12px] md:mt-[20px] border-[2px] bg-[#F8F7F3] border-[#E5E2EE] p-[10px] rounded-[10px] mt-[5px] hidden md:block">
             
                <li className="text-neutral-800 text-[17px] font-normal">Реанимация</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Хирургия</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Офтальмология</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Лабораторная диагностика</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Акушерство и Гинекология</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Гистология</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Косметология</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Оториноларингология</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Рентгенология и томография</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Стерилизация</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Физиотерапия и реабилитация</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Функциональная диагностика</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Эндоскопия</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Новинки</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Распродажи</li>
                <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Кабинеты под ключ</li>
              </li>
            )}
          </li>
          {openDirections && (
            <li className="border-[2px] border-[#E5E2EE] p-[10px] rounded-[10px] mt-[5px] block md:hidden">
              
              <li className="text-neutral-800 text-[17px] font-normal">Реанимация</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Хирургия</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Офтальмология</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Лабораторная диагностика</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Акушерство и Гинекология</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Гистология</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Косметология</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Оториноларингология</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Рентгенология и томография</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Стерилизация</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Физиотерапия и реабилитация</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Функциональная диагностика</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Эндоскопия</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Новинки</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Распродажи</li>
              <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Кабинеты под ключ</li>
            </li>
          )}
        </ul>
        <div className="hidden lg:block mt-[10px]">
          <ul className="border-[2px] border-[#E5E2EE] h-[580px] w-[350px] p-[20px] rounded-[10px]">
            <li className="text-neutral-800 text-[18px] font-medium leading-snug">Направления</li>
            <hr className="mt-[10px] border-[1px]" />
           
            <li className="text-neutral-800 text-[17px] mt-[10px] font-normal">Реанимация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Хирургия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Офтальмология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Лабораторная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Акушерство и Гинекология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Гистология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Косметология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Оториноларингология</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Рентгенология и томография</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Стерилизация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Физиотерапия и реабилитация</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Функциональная диагностика</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Эндоскопия</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Новинки</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Распродажи</li>
            <li className="text-neutral-800 text-[17px] mt-[5px] font-normal">Кабинеты под ключ</li>
          </ul>
        </div>
      </div>
      <div className='flex-col'>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-4">
        {currentPageData.map((el) => (
          <div key={el.id} className="lg:flex mt-[10px] lg:gap-[10px] border-[2px] rounded-[10px] overflow-hidden">
            <img src={el.img} className="object-cover sm:max-w-[730px] md:h-[250px] sm:w-[700px] lg:hidden md:max-w-[500px]" alt="" />
            <img src={el.img} className="object-cover lg:max-w-[320px] lg:h-[290px] hidden lg:block" alt="" />
            <div className="p-[16px]">
              <p className="max-w-[319px] text-neutral-800 text-lg font-semibold">{el.title}</p>
              <p className="mt-[10px] text-zinc-500 text-xs font-normal">14.03.2023</p>
              <p className="mt-[10px] max-w-[705px] text-zinc-500 text-base font-medium leading-snug">
                Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.
              </p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
            className="flex items-center justify-center gap-[20px] py-[30px] max-w-[700px] mx-auto"
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
  );
}

export default BlogComp;
