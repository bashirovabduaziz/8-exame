import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ data, clearInput }) => {
  const searchItems = data.length > 0 ? (
    data.map(el => (
      <div key={el.id} onClick={clearInput}>
        <Link to={`/single-product/${el.id}`} className='flex items-center h-[40px] hover:bg-gray-200'>
          <img src={el.img} width={30} height={30} alt="" />
          <span className='ml-2'>{el.title}</span>
        </Link>
      </div>
    ))
  ) : (
    <div className='text-center text-gray-500'>Afsuski, topilmadi</div>
  );

  return (
    <div className='absolute w-[100%] overflow-auto max-h-[300px] bg-[#fff] border-[2px] rounded-[10px] top-[120%] p-[10px] z-10 px-0'>
      {searchItems}
    </div> 
  );
};

export default SearchResult;
