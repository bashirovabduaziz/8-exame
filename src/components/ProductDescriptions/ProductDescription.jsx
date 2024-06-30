import React, { useState } from "react";
import ClientCarousel from "../Client/ClientCarousel";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-20 border border-gray-300  rounded-[10px] overflow-hidden hidden md:block">
      <div className="border-b border-gray-300">
        <ul className="flex mt-[10px]">
          <li
            className={`cursor-pointer pb-2 ml-[10px] ${
              activeTab === "description"
                ? "text-[#202020] font-bold border-b-[3px] border-[#07745E]"
                : "text-[#7A7687]"
            }`}
            onClick={() => setActiveTab("description")}
          >
           Описание оборудования
          </li>
          <li
            className={`ml-4 cursor-pointer pb-2 ${
              activeTab === "reviews"
                ? "text-[#202020] font-bold border-b-[3px] border-[#07745E]"
                : "text-[#7A7687]"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
           Услуги и сервис
          </li>
        </ul>
      </div>
      {activeTab === "description" && (
        <div className=" text-gray-700 space-y-6 bg-white p-[10px]">
              <h3 className="text-[#3D3D3D] text-[18px] font-bold">
            Описание оборудования
            </h3>
          <p className="text-[#727272] font-normal text-[14px]">
          Биохимический анализатор Mindr UA-66 оснащен открытой платформой для загрузки образцов и отлично размещается на столе в кабинете врача. Функциональная сочетаемость с дополнительным модулем ISE обеспечивает увеличение «скорострельности» прибора от 100 до 300 обработанных пробирок с биоматериалом в час, а также позволит замерять показатели K, Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе с другими важными параметрами исследования.
          </p>
          <p className="text-[#727272] font-normal text-[14px]">
          Прибор интуитивно понятен в использовании и техобслуживании, экономен в части финансовых затрат не реагенты. Что важно, калибровка системы аналогична той, что установлена на более современной аппаратуре, и это – идеальный вариант для небольших лабораторий, поскольку емкость погрузчика для проб меньше, чем у мощного оборудования.
          </p>
          <p className="text-[#727272] font-normal text-[14px]">
          Только небольшая загрузочная емкость для образцов и химических компонентов, если сравнивать с передовой аналогичной техникой, не позволяет этой системе претендовать на принятие в ряды аппаратуры, которой оснащены крупномасштабные лаборатории.
          </p>
         
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="pt-[10px] py-[10px]  bg-white ">
            <ClientCarousel />
        </div>
      )}
      <div className="h-[40px] border-t  p-[11px] md:p-[7px] border-gray-300">
        <ul className="flex items-center gap-[8px] md:gap-[15px] ">
            <li className="text-emerald-700 text-[10px] md:text-[16px] font-medium">Новинки</li>
            <li className="text-emerald-700 text-[10px] md:text-[16px] font-medium ">Получить прайс</li>
            <li className="text-emerald-700 text-[10px] md:text-[16px] font-medium">Условия доставки</li>
            <li className="text-emerald-700 text-[10px] md:text-[16px] font-medium">Способы оплаты</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
