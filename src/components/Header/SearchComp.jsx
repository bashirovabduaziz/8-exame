import { IoIosSearch } from 'react-icons/io';
import { selectOptions } from '../../static/options';
import { useState } from 'react';
import SearchResult from './SearchResult';
import { productData } from '../../static/data';

const SearchComp = () => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    if (searchValue) {
      const filtered = productData.filter((item) =>
        item.title && item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const clearInput = () => {
    setValue('');
  };

  return (
    <div>
      <div className="flex items-center rounded-[50px] bg-[#D5D1E1] pr-[20px] text-[12px] xl:text-[14px] relative border-[2px]">
        <div className="mr-2 flex items-center rounded-l-[50px] rounded-r-[50px] bg-white">
          <select className="w-[40%] rounded-[50px] bg-[#EFEFEF] px-[15px] py-[10px] text-[#7A7687] outline-none sm:w-[30%]">
            {selectOptions.map((option) => (
              <option value={option.title} key={option.id}>
                {option.title}
              </option>
            ))}
          </select>
          <input
            value={value}
            onChange={handleSearch}
            type="text"
            placeholder="Поиск"
            className="mr-2 block px-[15px] py-[8px] text-[#7A7687] outline-none"
          />
          {value && <SearchResult data={filteredData} clearInput={clearInput} />}
        </div>
        <label htmlFor="poisk" className="cursor-pointer">
          <IoIosSearch size={23} />
        </label>
      </div>
    </div>
  );
};

export default SearchComp;
