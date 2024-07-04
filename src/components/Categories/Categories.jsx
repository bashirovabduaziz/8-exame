import React, { useState } from 'react';
import { productData } from '../../static/data';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Categories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const categoriesToShow = showAllCategories
    ? productData.slice(0, 14)
    : productData.slice(0, 7);

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1300px]">
      <div className="md:flex items-center justify-between py-[20px]">
        <h1 className="mb-[10px] text-[23px] font-medium text-[#202020] sm:text-[20px] md:mb-[25px] md:text-[30px]">
          Популярные категории
        </h1>
        <button
          className="rounded-full border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5 lg:py-[11px] hover:bg-[#066753] duration-150"
          onClick={toggleShowAllCategories}
        >
          {showAllCategories ? 'Закрыть Все Категории' : 'Все категории'}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoriesToShow.map((category, index) => (
          <Link
            to={`/single-product/${category.id}`}
            key={category.id}
            className={`flex flex-col items-center border rounded-lg overflow-hidden ${index === 1 || index === 10 ? 'md:col-span-1 md:row-span-2 ' : 'md:h-[250px] h-[200px]'}`}
          >
            <div
              className={`overflow-hidden max-w-[400px]  w-full flex justify-center items-center bg-white border-b ${index === 1 || index === 10 ? 'md:h-[466px] h-[150px]' : 'md:h-[200px] h-[150px]'}`}
            >
              <LazyLoadImage
                src={category.img}
                alt={category.title}
                effect="blur"
                className={`object-cover max-w-[200px] w-full h-full ${index === 10 ? 'md:h-[450px] lg:h-[450px]' : ''} ${index === 1 ? 'md:h-[500px] ' : ''}`}
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-sm font-medium w-[100px] overflow-hidden text-ellipsis whitespace-nowrap mt-[5px]">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
