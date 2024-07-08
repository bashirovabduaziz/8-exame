import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Settings } from "../../assets/SvgIcons";
import ReactPaginate from "react-paginate";
import { brands } from "../../static/Brands";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  
} from "@mui/material"
import Products from "../../components/Products/Products";
import Cureer from "../../components/Cureer/Cureer";
import News from "../../components/News/News";
import BreadCrumbs from "../../components/BreadCumps/BreadCrumbs";
import Quetions from "../../components/Quetions/Quetions";
import Info from "../../components/Info/Info";

const countries = [
  "Germany",
  "USA",
  "Japan",
  "France",
  "UK",
  "Italy",
  "China",
  "India",
  "South Korea",
  "Canada",
];

const itemsPerPage = 9;

const Manufactures = () => {
  const [catalog, setCatalog] = useState(false);
  const [country, setCountry] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(brands.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentItems = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <BreadCrumbs />
      <div className="max-w-[1300px] py-[20px] mx-auto px-5 ">
        <div className=" w-full sm:hidden block sm:w-[300px] relative">

          <h2
            onClick={() => setCatalog(!catalog)}
            className="pb-4 flex gap-2 items-center justify-center border rounded-lg p-5 cursor-pointer"
          >
            <span>
              <Settings />
            </span>
            Фильтр
          </h2>
          <div
            className={`${
              catalog
                ? country
                  ? "h-[600px] opacity-100"
                  : "h-[250px]"
                : "h-0 opacity-0"
            } rounded-lg absolute bg-[#f8f7f3] duration-300 z-50 top-[60px] w-[100%] border mt-[10px] p-[20px]`}
          >
            <div className="border rounded-lg py-[10px] px-[20px]">
              <h2 className="flex justify-between py-2 cursor-pointer">
                Направления
                <MdKeyboardArrowDown className={`duration-300 rotate-0`} />
              </h2>
            </div>
            <div className="border rounded-lg py-[10px] my-[10px] px-[20px]">
              <h2
                onClick={() => setCountry(!country)}
                className="flex justify-between py-2 cursor-pointer"
              >
                Страна
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    country ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
              <div
                className={`py-[10px] duration-300 overflow-hidden ${
                  country ? "h-[360px] block" : "h-[0px] hidden"
                }`}
              >
                <div
                  className={`flex justify-between items-center rounded-full p-3 px-4 ${
                    country ? "bg-[#fff]" : "bg-transparent"
                  }`}
                >
                  <input
                    type="text"
                    className="border-none outline-none w-full"
                    placeholder="Поиск по стране"
                  />
                  <IoIosSearch size={20} />
                </div>
                <div className="mt-[10px]">
                  <div className="space-y-2">
                    {countries.map((country, index) => (
                      <FormGroup key={index}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={country}
                        />
                      </FormGroup>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-[10px]">
            <button  className="w-[50%]  py-2 rounded-[50px] border-[2px] border-[#D5D1E1] text-[#202020] xl:block hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]">
                Сбросить
              </button>
              <button  className="rounded-full  w-[50%]  py-2 border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px]   hover:bg-[#066753] duration-150">
                Показать
              </button>
            </div>
          </div>
          <div className="sm:w-[70%]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
              {currentItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <div className="h-[136px] border-b bg-[#fff] flex justify-center items-center">
                    <img src={item.img} alt={item.title} className="max-w-[120px]" />
                  </div>
                  <h2 className="px-5 py-3">{item.title}</h2>
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
              previousLinkClassName={'p-[14px] border rounded-lg hover:bg-gray-200'}
              nextLinkClassName={'p-[14px] border rounded-lg hover:bg-gray-200'}
              disabledClassName={'pagination__link--disabled'}
              activeClassName={'bg-[#088269] text-white px-3 py-1 border rounded-lg'}
            />
          </div>
        </div>

        <div className="hidden sm:flex gap-[30px]">
          <div className="w-[30%]">
            <div className="border rounded-lg py-[10px] px-[20px]">
              <h2 className="flex justify-between py-2">
                Направления
                <MdKeyboardArrowDown className={`duration-300 rotate-0`} />
              </h2>
            </div>
            <div className="border rounded-lg py-[10px] my-[10px] px-[20px]">
              <h2
                onClick={() => setCountry(!country)}
                className="flex justify-between py-2 cursor-pointer"
              >
                Страна
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    country ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
              <div
                className={`py-[10px] duration-300 overflow-hidden ${
                  country ? "h-[400px] block" : "h-[0px] hidden"
                }`}
              >
                <div
                  className={`flex justify-between items-center  rounded-full p-3 px-4 ${
                    country ? "bg-[#fff]" : "bg-transparent"
                  }`}
                >
                  <input
                    type="text"
                    className="border-none outline-none w-full md:max-w-[120px]"
                    placeholder="Поиск по стране"
                  />
                  <IoIosSearch size={20} />
                </div>
                <div className="mt-[10px]">
                  <div className="space-y-2">
                    {countries.map((country, index) => (
                      <FormGroup key={index}>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label={country}
                        />
                      </FormGroup>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-[10px]">
              <button  className="w-[50%]  py-2 rounded-[50px] border-[2px] border-[#D5D1E1] text-[#202020] xl:block hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]">
                Сбросить
              </button>
              <button  className="rounded-full  w-[50%]  py-2 border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px]   hover:bg-[#066753] duration-150">
                Показать
              </button>
            </div>
          </div>
          <div className="sm:w-[70%]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
              {currentItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <div className="h-[196px] border-b bg-[#fff] flex justify-center items-center">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h2 className="px-5 py-3">{item.title}</h2>
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
              previousLinkClassName={'p-[14px] border rounded-lg hover:bg-gray-200'}
              nextLinkClassName={'p-[14px] border rounded-lg hover:bg-gray-200'}
              disabledClassName={'pagination__link--disabled'}
              activeClassName={'bg-[#088269] text-white px-3 py-1 border rounded-lg'}
            />
          </div>
        </div>
      </div>
      <Products />
      <Cureer />
      <News />
      <Info />
      <Quetions />
    </div>
  );
};

export default Manufactures;
