import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { IoMdAdd } from 'react-icons/io';

export const CureerInfoAccordion = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="divide-y divide-slate-200 text-[#202020]">
        <div>
          <h2>
            <button
              id="faqs-title-01"
              type="button"
              className="flex w-full items-center justify-between py-2 text-left font-semibold"
              onClick={toggleAccordion}
              aria-expanded={expanded}
              aria-controls="faqs-text-01"
            >
              <span className="text-[16px] md:text-[18px]">{title}</span>
              <hr className="text-white" />
              {expanded ? (
                <span className="rounded-full  p-1 text-[20px] bg-[#088269] text-[#F8F7F3]">
                  <IoMdClose size={20} />
                </span>
              ) : (
                <span className="rounded-full border-[1px] border-[#D5D1E1] p-1 text-[20px] text-black">
                  <IoMdAdd size={20} />
                </span>
              )}
            </button>
          </h2>
          <div
            id="faqs-text-01"
            role="region"
            aria-labelledby="faqs-title-01"
            className={`grid overflow-hidden text-sm text-white transition-all duration-300 ease-in-out ${
              expanded
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="mb-6 mt-3 text-[12px] text-[#202020] sm:text-[14px] md:text-[16px]">
              Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.
              </p>
              <div className="flex items-center gap-2">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};
