import { useState } from 'react'; 


import { categories } from '../../static/Categories';

const Categories = () => {
  const [showAllCategories, setShowAllCategories] = useState(false); 
  const categoriesToShow = showAllCategories ? categories : categories.slice(0, 7);

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1300px]">
      <div className='md:flex items-center justify-between py-[20px]'>
        <h1 className='text-[26px]'>Популярные категории</h1>
        <button
          className='rounded-full border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5 lg:py-[11px] hover:bg-[#066753] duration-150'
          onClick={toggleShowAllCategories}
        >
          {showAllCategories ? 'Закрыть Все Категории' : 'Все категории'}
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoriesToShow.map((category, index) => (
          <div
            key={category.id}
            className={`flex flex-col items-center border rounded-lg overflow-hidden shadow-lg ${index === 1 ? 'md:col-span-1 md:row-span-2 md:h-[517px] h-[200px]' : 'md:h-[250px] h-[200px]'}`}
          >
            <div className={`overflow-hidden w-full object-cover bg-white ${index === 1 ? 'md:h-[466px] h-[150px]' : 'md:h-[200px] h-[150px]'}`}>
              <img
                src={category.img}
                alt={category.title}
                className="object-cover md:ml-[40px]"
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-sm font-medium">{category.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
